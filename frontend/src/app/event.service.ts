import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})


export class EventService{

    loggedIn=false;
    _url = 'http://localhost:3000/user';
    _login = 'http://localhost:3000/admin';

    constructor(private _http: HttpClient) {
     
    }

    registerUser(user:User){
        return this._http.post<any>(this._url,user);
    }

    adminLogin(admin:Admin){
      this.loggedIn=true;
      return this._http.post<any>(this._login,admin); 
    }

    userData(){
      this.loggedIn=false;
      return this._http.get<any>(this._url);
    }


}