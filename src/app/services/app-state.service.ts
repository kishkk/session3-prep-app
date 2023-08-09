import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public bSubject$ = new BehaviorSubject<number>(0);
  
  constructor() { }
}
