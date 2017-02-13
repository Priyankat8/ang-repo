import {Component} from '@angular/core'

@Component({
  //selector: 'rests-nav',
  template: `
    <h4>{{address}}</h4>
  `
})
export class ContactComponent {
  address: string;


  select() {
    this.address = "Atlanta, GA";
  }
}