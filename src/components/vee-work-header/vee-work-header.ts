import { Component } from '@angular/core';

/**
 * Generated class for the VeeWorkHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vee-work-header',
  templateUrl: 'vee-work-header.html'
})
export class VeeWorkHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello VeeWorkHeaderComponent Component');
    this.text = 'Hello World';
  }

}
