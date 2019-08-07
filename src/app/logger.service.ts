import { Injectable } from '@angular/core';
import {Human} from './mycomponents/human'
import {HUMANS} from './mycomponents/mockhumans'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  getHumans(): Human[] {
    return HUMANS;
  }
}
