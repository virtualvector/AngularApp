import { Component, OnInit } from '@angular/core';
import { Human } from './human';
import {HUMANS } from './mockhumans'
import { LoggerService } from '../logger.service'
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-main',
  template:
    `
    <!--
    <h1> Hello Bro {{ hum1.name }}<h1>
    
    <h2>My Humans</h2>
<ul >
<li *ngFor="let my_human of humans">
<li *ngIf="value == my_human.name and value1==my_human.age">
    <span >{{my_human.age}}</span> {{my_human.name}}
 </li>
  </li>
</ul>

 

    <ul >
<li *ngFor="let my_human of humans">
    <span >{{my_human.age}}</span> {{my_human.name}}
  </li>
</ul>
-->







<p>User Name:<input type="text" id="num1" [(ngModel)] = "value" ></p>
<p>Password:<input type ="text1" id="num2" [(ngModel)] = "value1"></p>
<p><button (click)="checker(value,value1)">Submit</button></p>
<p> {{ item }} </p>

<!--
<ul >
<li *ngFor="let my_human of humans">
<div *ngIf="value == my_human.name && value1==my_human.age">
    <span >{{my_human.age}}</span> {{my_human.name}}
</div >
  </li>
</ul>


<div *ngIf="value && value1">
<h1> {{value + value1}}</h1>
</div>
-->


    
    
    `
  
})
export class MainComponent implements OnInit  {
    name: string = "Rohith"
    item:string ;

    humans:Human[];

    /*    hum1: Human = {
        name : "rohith raj reganti",
        age : 21

    }; */

    constructor(private loggerService: LoggerService, private http: HttpClient){

        

    }

    checker(value,value1){
            console.log(value);
           var username = value;
           var  pass = value1;

           this.humans.forEach(element => {
               if(element.name==value && element.age==value1)
               {
                   this.item = "yea bro";
               }
               else 
               {
                   this.item = "na bro";
               }
           });

       

    }
    getHumans(): void {
        this.humans = this.loggerService.getHumans();
      }

    ngOnInit(){
        //this.getHumans();

        this.http.get("http://localhost:3000/posts/").toPromise()
        .then((res:Array<Human>)=> { this.humans = res;})

    }
    
}
