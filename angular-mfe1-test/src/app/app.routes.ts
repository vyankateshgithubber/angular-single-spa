import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ChatSummaryComponent } from './chat-summary/chat-summary.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'chat-summary', component: ChatSummaryComponent },
  
  // This is crucial for single-spa to work correctly
  { path: '**', component: EmptyRouteComponent }

];
