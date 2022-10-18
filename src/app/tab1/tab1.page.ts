import { Component, OnInit } from '@angular/core';
import { isTabSwitch } from '@ionic/angular/directives/navigation/stack-utils';

declare var WifiWizard2: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  public currentNetwork: string;
  public message: string;
  public networkID: string;
  public error: string;
  public nodes = [];

  constructor() {
    this.currentNetwork = '';
  }

  async getNetworks() {
    this.getCurrentNetwork();
    this.message = 'Searching for nodes...';
    this.error = '';

    try {
      this.nodes = [];
      let wifis = await WifiWizard2.scan();
      this.nodes = wifis.filter(wifi => wifi.SSID.startsWith('NODE-'));
      this.message = '';
      if(this.nodes.length === 0) {
        this.message = 'No nodes found. Please try again.';
      }
    } catch (error) {
      if (error === 'WIFI_NOT_ENABLED') {
        this.message = 'Please enable WiFi to scan for nodes';
      } else {
        this.error = error;
      }
    }
  }

  async getCurrentNetwork() {
    try {
      this.currentNetwork = await WifiWizard2.getConnectedSSID();
    } catch (error) {
      if (error === 'WIFI_NOT_ENABLED') {
        this.message = 'Please enable WiFi to scan for nodes';
      } else {
        this.error = error;
      }
    }
  }


  async connectToNode(node) {
    try {
      // await WifiWizard2.disable(this.currentNetwork);
      this.message = 'Connecting to ' + node.SSID + '...';
      this.networkID = await WifiWizard2.getSSIDNetworkID(node.SSID);

      //await WifiWizard2.connect(node.SSID, true);
      // let config = await WifiWizard2.formatWifiConfig('NODE-9FFFAFE5', false);
      // await WifiWizard2.add(config);
      await WifiWizard2.enable(node.SSID, true, true);
    } catch (error) {
      this.error = error;
      console.error(error);
    }
  }

  ngOnInit(): void {
  }
}
