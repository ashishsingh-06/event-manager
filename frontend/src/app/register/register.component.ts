import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../user';
import { PreviewComponent } from '../preview/preview.component';
import { SharedService } from '../shared.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User('','',null,'',null,'',null);
  closePreview = false;
  public imagePath;
  imgURL: any;
  closeResult = '';
  registrationId:string=null;
  isLoading=false;
  submitLoading=false;

  constructor(private router:Router,private modalService: NgbModal,private preview:PreviewComponent,private data:SharedService,public dialog: MatDialog,private _eventService:EventService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message=>this.registrationId=message)
  }

  open(content) {

    this.isLoading=true;

    setTimeout(() => {
      this.isLoading=false;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }, 2000);
    
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(){
    // this.data.changeMessage(this.userModel);
    // this.closePreview=true;    
    this._eventService.registerUser(this.userModel)
    .subscribe(
      data=>{
        // alert(data);
        console.log('success!',data);
        this.registrationId = data.userDetails.registrationId; 
        this.data.changeMessage(this.registrationId);
      },
      error=>console.error(error)
    );
    this.dialog.open(PreviewComponent);
  }

  selectImage(files){
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log('helloworld')
      // this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      // console.log(this.imgURL);
    }
  }

  openDialog(){
    this.dialog.open(PreviewComponent);
  }

  onFileSelected(){

    console.log(this.userModel.image);

  }

  removePreview(){
    this.closePreview=false;
  }

  getTickets(value){
    if(value=='Solo')
    {
      this.userModel.noOfTickets=1;
    }
    else{
      this.userModel.noOfTickets=null;
    }
  }

  reset(){
    this.userModel.firstName=null;
    this.userModel.lastName=null;
    this.userModel.mobile=null;
    this.userModel.email=null;
    this.userModel.image=null;
    this.userModel.registrationType='';
    this.userModel.noOfTickets=null;
  }

  
}




