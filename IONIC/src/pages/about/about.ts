import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../data/data.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [DataService]
})
export class AboutPage {
  urls: any = [];
  urldb: any;
  fechadb: any;

  constructor(public navCtrl: NavController, private db: DataService) {
    db.imagesData.orderByKey().once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var chilData = childSnapshot.val();
        this.urls.push(
          {
            ur: chilData.url,
            date: chilData.fecha
          }
        );
      });
    });
  }
}

