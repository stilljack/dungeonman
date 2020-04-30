import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
     SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
