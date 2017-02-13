//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RestAppModule} from './rest.app.module';
//import {AppModule} from './app';

platformBrowserDynamic().bootstrapModule(RestAppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));