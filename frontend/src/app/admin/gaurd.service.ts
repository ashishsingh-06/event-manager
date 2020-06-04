import { CanDeactivate, CanActivate } from '@angular/router';
import { AdminComponent } from './admin.component';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  
export class GaurdService implements CanActivate{

    constructor(private event:EventService){}

    canActivate(){
        return this.event.loggedIn;
    }
}