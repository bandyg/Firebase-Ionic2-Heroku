var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
/*
  Generated class for the ShowHideInput component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
export var ShowHideInputComponent = (function () {
    function ShowHideInputComponent() {
        console.log('Hello ShowHideInput Component');
        this.text = 'Hello World';
    }
    ShowHideInputComponent = __decorate([
        Component({
            selector: 'show-hide-input',
            templateUrl: 'show-hide-input.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ShowHideInputComponent);
    return ShowHideInputComponent;
}());
//# sourceMappingURL=show-hide-input.js.map