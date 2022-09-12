import { Component, OnInit } from '@angular/core';
import { NodeService } from '../services/node.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getInfo().subscribe((data) => {
      console.log(data);
    });

    this.nodeService.getNodes().subscribe((data) => {
      console.log(data);
    });

  }
}
