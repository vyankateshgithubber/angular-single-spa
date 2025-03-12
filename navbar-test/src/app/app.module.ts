import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { AssetUrlPipe } from '../pipes/asset-url.pipe';

@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule,AssetUrlPipe], 
  bootstrap: [AppComponent],
  providers: [ ],
})
export class AppModule { }
