import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
private directionSubject = new Subject<string>();
public dir$ = this.directionSubject.asObservable();

  constructor() { }

  set direction(dir:string){
    this.directionSubject.next(dir)
  }
  getDirection(){
    return this.dir$
  }
}
