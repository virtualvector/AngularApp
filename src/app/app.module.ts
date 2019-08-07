import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './mycomponents/main.component';
import {NgForm, FormsModule} from '@angular/forms'; //to use ngModel for input 

@NgModule({
  declarations: [
    AppComponent, MainComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
