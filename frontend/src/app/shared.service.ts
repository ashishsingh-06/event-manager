import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root'
  })

export class SharedService{

    registrationId:string=null;
    private messageSource = new BehaviorSubject<string>('');
    currentMessage = this.messageSource.asObservable();

    constructor(){}

    changeMessage(message:string){
      return this.messageSource.next(message);
    }


}