import { enableProdMode, NgZone } from '@angular/core';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
//import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { APP_BASE_HREF } from '@angular/common';

// if (environment.production) {
//   enableProdMode();
// }
const lifecycles = singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule),
  template: "<app-root></app-root>",
  NgZone,
  Router: Router,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;