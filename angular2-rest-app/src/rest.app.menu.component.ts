import {Component} from '@angular/core'

import { MenuItem } from './rest.app.model';
import { MenuItemService } from './rest.app.service';

@Component({
  //selector: 'rest-nav',
  template: `
    <h4>{{menuItems.length}}</h4>
    <ul>
       <li *ngFor="let menuItem of menuItems">
        {{menuItem.name}}
      </li>
    </ul>
  `,
})
export class MenuListComponent {
 name:string;
 menuItems: MenuItem[] = [];
 
  constructor(private menuItemService : MenuItemService) {
    this.name = 'Rest App'
  }
  
  select(){
      this.name="Menu Items";
     
     this.menuItemService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems);
     
  }
  
  
}