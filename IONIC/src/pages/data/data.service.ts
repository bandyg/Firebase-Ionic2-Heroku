import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DataService {
    public dbinit: any;
    public metaData: any;
    public imagesData: any;
    constructor() {
        this.dbinit = firebase.database();
        this.metaData = firebase.database().ref('metadata');
        this.imagesData = firebase.database().ref('images');
    }
}