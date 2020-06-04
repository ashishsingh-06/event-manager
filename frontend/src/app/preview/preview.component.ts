import { Component, OnInit,Input} from '@angular/core';
import { User } from '../user';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  enable=true;
  userModel = new User('','',null,'',null,'',null);
  url="../../assets/images/m.png";
  public imagePath;
  imgURL: any;
  registrationId:string=null;
  // name=this.registrationId.substr(0,this.registrationId.indexOf('_'));

  constructor(private router:Router,private data:SharedService) {

  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message=>this.registrationId=message);
  }

  editPreview(){
    this.enable=false;
  }


  preview(files)
  {
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
      console.log(this.imgURL);
    }
  }
    
}
