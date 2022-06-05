import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-loginpage',
  templateUrl: './reg-loginpage.component.html',
  styleUrls: ['./reg-loginpage.component.scss']
})
export class RegLoginpageComponent implements OnInit {
  statusUP:boolean=false;
  statusIN:boolean=true;
  constructor() { }
  changeStatus(input:number){
    if(input==1 && this.statusIN==false )
    {
      this.statusIN=true;
      this.statusUP=false;
    }else if(input==0 && this.statusUP==false){
      this.statusIN=false;
      this.statusUP=true;
    }
  }
  ngOnInit(): void {
  }

}
