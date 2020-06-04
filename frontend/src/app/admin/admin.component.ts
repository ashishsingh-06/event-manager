import { Component, OnInit } from '@angular/core';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
import { EventService } from '../event.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  [x: string]: any;

  constructor(private sanitizer:DomSanitizer,private modalService:NgbModal,private _eventService:EventService) {
    this.getData();
   }

  ngOnInit(): void {
    this.showChart=true;
  }

  result=[];
  tableItem={
    'firstName':'',
    'lastName':'',
    'mobile':'',
    'email':'',
    'image':'',
    'registrationType':'',
    'noOfTickets':'',
    'registrationId':'',
    'registrationDate':'',
  };
  headers = ['firstName','lastName','mobile','email','registrationType','noOfTickets','registrationId',];
  tableHeaders=['First Name','Last Name','Mobile','Email','Registration Type','No of Tickets','Registration ID',];
  soloUsers=0;
  groupUsers=0;
  corporateUsers=0;
  otherUsers=0;
  totalTickets=0;
  imgUrl:any='../../assets/images/m.png';
  showChart=false;
  showTable=false;

  public pieChartLabels: string[] = ['Solo','Group','Corporate','Others'];
  public pieChartData: number[] = [];
  public pieChartType: any = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)','#ffdcb4' ,'rgba(0,0,255,0.3)'],
    }
  ]

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  getData(){
    this._eventService.userData()
    .subscribe(
      response=>{
        this.result = response.data;
        console.log(this.result);
        this.chartUpdate(this.result);
      })
  }

  showValue(event:any){
    if(event.value=='Chart')
    {
      this.showChart=true;
      this.showTable=false;
    }
    else if(event.value=='Table')
    {
      this.showChart=false;
      this.showTable=true;
    }
  }


  chartUpdate(result){

    this.result.forEach((element)=>{

      this.totalTickets=this.totalTickets+element.noOfTickets

      if(element.registrationType=='Solo'){
        this.soloUsers++;
      }
      else if(element.registrationType=='Group'){
        this.groupUsers++;
      }
      else if(element.registrationType=='Corporate' || element.registrationType=='corporate'){
        this.corporateUsers++;
      }
      else if(element.registrationType=='Others'){
        this.otherUsers++;
      }
    })

    this.pieChartData=[this.soloUsers,this.groupUsers,this.corporateUsers,this.otherUsers]

  }

  display(content,item){
    this.tableItem=item;
    let arr = item.image.data;
    let TYPED_ARRAY = new Uint8Array(arr);
    const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
    let base64String = btoa(STRING_CHAR);
    this.imgUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64String);
    this.modalService.open(content,{ariaLabelledBy:'modal-basic-title'}).result.then((res)=>{
      this.closeResult=`Closed with : ${res}`;
    },(reason)=>{
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`; 
    });

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
  

}
