import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { routes } from './app.routes';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ChatSummaryComponent } from './chat-summary/chat-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { AssetUrlPipe } from '../pipes/asset-url.pipe';

@NgModule({
  declarations: [AppComponent,
    ChatSummaryComponent], 
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterOutlet,
    ProfileComponent,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AssetUrlPipe
  ], 
  bootstrap: [AppComponent],
  providers: [
    provideClientHydration(withEventReplay()),
    { provide: APP_BASE_HREF, useValue: '/angular-mfe1' },
  ],
})
export class AppModule { }
