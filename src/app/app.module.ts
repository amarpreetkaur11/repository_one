import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponenetTrialComponent } from './componenet-trial/componenet-trial.component';
import { Carousel1Component } from './carousel1/carousel1.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponenetTrialComponent,
    Carousel1Component,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
