//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule, JsonpModule} from '@angular/http';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import {AppComponent} from './rest.app.component'
import {RestNavComponent} from './rest.app.nav.component'
import {MenuListComponent} from './rest.app.menu.component'
import {ContactComponent} from './rest.app.contact.component'
import { MenuItemService } from './rest.app.service';

const appRoutes: Routes = [
  { path: 'Menu', component: MenuListComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
             BrowserModule, 
             HttpModule, 
             JsonpModule ],
  exports: [RouterModule],
  declarations: [ AppComponent, RestNavComponent, MenuListComponent, ContactComponent ],
  providers: [MenuItemService],
  bootstrap: [ AppComponent ]
})
export class RestAppModule {
    //console.error('in rest appmodule');
}