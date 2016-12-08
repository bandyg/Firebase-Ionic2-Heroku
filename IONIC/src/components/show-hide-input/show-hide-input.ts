import { Component } from '@angular/core';

/*
  Generated class for the ShowHideInput component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'show-hide-input',
  templateUrl: 'show-hide-input.html'
})
export class ShowHideInputComponent {

  text: string;

  constructor() {
    console.log('Hello ShowHideInput Component');
    this.text = 'Hello World';
  }

}
