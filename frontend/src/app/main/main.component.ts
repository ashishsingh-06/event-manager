import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { User } from 'src/app/user';
import { Admin } from 'src/app/admin';
import { EventService } from '../event.service'; 
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MatSnackBar],
})
export class MainComponent implements OnInit {

  hide = true;
  show = true;
  userModel = new User('','',null,'',null,'',null);
  adminModel = new Admin('','');
  isLoading=false;

  constructor( private router:Router,private _eventService:EventService,private _snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(){

    this.isLoading=true;

    setTimeout(() => {
      this.isLoading=false;
    }, 2000);
    this._eventService.adminLogin(this.adminModel)
    .subscribe(
      data=>{
        console.log(data);
        if(data.message=='Welcome')
        {
          this.router.navigate(['admin'])
        }
        else
        {
          this.openSnackBar(data.message,'close');
        }
      }
    );
    // this._eventService.registerUser(this.userModel)
    // .subscribe(
    //   data=>{
    //     alert(data);
    //     console.log('success!',data)
    // },
    //   error=>console.error(error)
    // );

  }

  openSnackBar(message:string,action:string){
    this._snackBar.open(message,action,{
      duration:4000,
    });
  }

 requiredFunction(message){
  
 }

}
