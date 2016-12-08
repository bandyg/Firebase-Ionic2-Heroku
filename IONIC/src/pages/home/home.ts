import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../data/data.service';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [DataService]
})
export class HomePage {

    f1: number;
    f2: number;
    f3: number;
    sx: number;
    sy: number;
    //tmp
    tmpf1: number;
    tmpf2: number;
    tmpf3: number;
    constructor(public navCtrl: NavController, private db: DataService) {
         db.metaData.on('value', (snapshot) => {
            this.f1 = snapshot.val().app;
            this.f2 = snapshot.val().led2;
            this.f3 = snapshot.val().led3;
            this.sx = snapshot.val().servoX;
            this.sy = snapshot.val().servoY;
        });
    }

    changeData(num: number) {
      this.tmpf1 = this.f1;
      this.tmpf2 = this.f2;
      this.tmpf3 = this.f3;
        switch (num) {
            case 1:
                if (this.f1 === 0) {
                    this.tmpf1 = 1;
                    this.tmpf2 = 1;
                    this.tmpf3 = 1;
                } else {
                    this.tmpf1 = 0;
                    this.tmpf2 = 0;
                    this.tmpf3 = 0;
                }
                break;
            case 2:
                if (this.f2 === 0) {
                    this.tmpf2 = 1;
                } else {
                    this.tmpf2 = 0;
                }
                break;
            case 3:
                if (this.f3 === 0) {
                    this.tmpf3 = 1;
                } else {
                    this.tmpf3 = 0;
                }
                break;
        }
        this.db.metaData.set({
            app: this.tmpf1,
            servoX: this.sx,
            servoY: this.sy,
            led2: this.tmpf2,
            led3: this.tmpf3
        });
    }
}
