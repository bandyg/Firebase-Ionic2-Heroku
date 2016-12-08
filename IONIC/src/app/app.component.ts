import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';
import { TabsPage } from '../pages/tabs/tabs';

import * as firebase from 'firebase';
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  public rootPage: any;

  constructor(platform: Platform, public push: Push) {

    // Initialize Firebase

    this.rootPage = TabsPage;

    const config = {
      apiKey: "AIzaSyDazuFdCgvR5yJNp-jgOxYa1bB6lRmNhhs",
      authDomain: "arduino-3c71c.firebaseapp.com",
      databaseURL: "https://arduino-3c71c.firebaseio.com",
      storageBucket: "arduino-3c71c.appspot.com",
      messagingSenderId: "69889639940"
    };
    firebase.initializeApp(config);


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
    });

    this.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
  }
}
