import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
  private emitOptSource = new Subject<string>();
  changeEmitted$ = this.emitOptSource.asObservable();

  emitOpt(opt:string){
    this.emitOptSource.next(opt);
  }
}
