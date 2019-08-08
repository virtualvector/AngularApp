import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http'; //for http

import { AppComponent } from './app.component';
import { MainComponent } from './mycomponents/main.component';
import {NgForm, FormsModule} from '@angular/forms'; //to use ngModel for input 

@NgModule({
  declarations: [
    AppComponent, MainComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
