import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabSubject = new Subject<string>();
  
  constructor() { }

  tabClicked(tabName) {
    this.tabSubject.next(tabName);
  }
}
