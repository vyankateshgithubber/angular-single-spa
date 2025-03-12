import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AssetUrlPipe } from '../pipes/asset-url.pipe';

@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule,RouterOutlet,AssetUrlPipe], 
  bootstrap: [AppComponent]
})
export class AppModule { }
