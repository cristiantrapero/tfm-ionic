import { Component, OnInit } from '@angular/core';

declare var WifiWizard2: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  public currentNetwork: string;
  public message: string;
  public error: string;
  public nodes = [];

  constructor() {
    this.getNetworks();
  }

  async getNetworks() {
    WifiWizard2.getConnectedSSID().then(ssid => { this.currentNetwork = ssid; });

    this.message = 'Searching for nodes...';

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

  async connectToNode(node) {

    try {
      this.message = 'Connecting to ' + node.SSID + '...';
      let config = await WifiWizard2.formatWifiConfig(node.SSID, false);
      await WifiWizard2.add(config);
      await WifiWizard2.enable(node.SSID, true, true);
    } catch (error) {
      this.error = error;
    }
  }

  ngOnInit(): void {
  }
}
