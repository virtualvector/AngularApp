import { Injectable } from '@angular/core';
import {Human} from './mycomponents/human'
import {HUMANS} from './mycomponents/mockhumans'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  getHumans(): Human[] {
    return HUMANS;
  }
  
 /*
 getHumans(): Promise<any> {
  return this.http.get("http://localhost:3000/posts/").toPromise()
}
*/

}
