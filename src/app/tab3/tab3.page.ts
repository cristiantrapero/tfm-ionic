import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeService } from '../services/node.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public info: Observable<any>;
  public nodes: Observable<any>;
  public error: string;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.getInfo();
    this.getNodes();
  }

  ionViewWillEnter() {
    this.getInfo();
    this.getNodes();
  }

  getInfo(){
    this.nodeService.getInfo().subscribe((data) => {
      this.info = data;
      console.log(this.info);
    }, (error) => {
      console.log(error);
    });
  }

  getNodes(){
    this.nodeService.getNodes().subscribe((data) => {
      this.nodes = data;
      console.log(this.nodes);
    }, (error) => {
      console.log(error);
    });
  }

}
