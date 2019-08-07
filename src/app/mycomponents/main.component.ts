import { Component, OnInit } from '@angular/core';
import { Human } from './human';
import {HUMANS } from './mockhumans'
import { LoggerService } from '../logger.service'



@Component({
  selector: 'app-main',
  template:
    `
    <!--
    <h1> Hello Bro {{ hum1.name }}<h1>
    
    <h2>My Humans</h2>
<ul >
<li *ngFor="let my_human of humans">
    <span >{{my_human.age}}</span> {{my_human.name}}
  </li>
</ul>

    -->

    <ul >
<li *ngFor="let my_human of humans">
    <span >{{my_human.age}}</span> {{my_human.name}}
  </li>
</ul>

<p>first number:<input type="text" id="num1" [(ngModel)] = "value" ></p>
<p>second number:<input type ="text1" id="num2" [(ngModel)] = "value1"></p>
<div *ngIf="value && value1">
<h1> {{value + value1}}</h1>
</div>


    
    
    `
  
})
export class MainComponent implements OnInit  {
    name: string = "Rohith"

    humans:Human[];

    /*    hum1: Human = {
        name : "rohith raj reganti",
        age : 21

    }; */

    constructor(private loggerService: LoggerService){

    }

    getHumans(): void {
        this.humans = this.loggerService.getHumans();
      }

    ngOnInit(){
        this.getHumans();
    }
    
}
