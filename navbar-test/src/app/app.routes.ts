import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   // This is crucial for single-spa to work correctly
  { path: '**', component: AppComponent }];
