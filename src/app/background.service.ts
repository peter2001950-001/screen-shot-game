import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() { }

  isBlurred: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  setBackground(isBlurred: boolean){
    this.isBlurred.next(isBlurred);
  }

  getBackground() : BehaviorSubject<boolean>{
    return this.isBlurred
  }
}
