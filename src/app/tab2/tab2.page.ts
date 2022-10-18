import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeService } from '../services/node.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public info: Observable<any>;
  public message: string;
  public receiver: string;
  // declare a list of json objects
  public messages: string[] = [];

  constructor(
    public photoService: PhotoService,
    public nodeService: NodeService
  )
    {

    }

  ngOnInit() {
      this.getInfo();
  }

  ionViewWillEnter() {
    this.getInfo();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  getInfo(){
    this.nodeService.getInfo().subscribe((data) => {
      this.info = data;
      console.log(this.info);
    }, (error) => {
      console.log(error);
    });
  }

  sendMessage() {
    console.log(this.message);
    console.log(this.receiver);

    // send and remove photo
    let yeah = this.photoService.photos.pop();
    console.log(yeah);

    if (yeah !== undefined) {
      this.messages.push(yeah.webviewPath);
    }

    if (this.message !== undefined) {
    this.messages.push(this.message);
    this.message = undefined;
    }
    console.log(this.messages);

    this.nodeService.postMessage(this.receiver, false, this.message).subscribe((data) => {
      console.log(data);

      }, (error) => {
        console.log(error);
        });
  }

  selectedReceiver(e){
    console.log(e.detail.value);
    this.receiver = e.detail.value;
}

}
