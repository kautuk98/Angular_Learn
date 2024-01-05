import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  username:any = "Hello from comp2";

  constructor(){

  }
  
  ngOnInit(): void {
  }


  clickMe(){
    alert(this.username)
  }

  // constructor(private _designUtility: DesignutilityService) {
  //   this._designUtility.username.subscribe(user => {
  //     this.username = user;
  //   })
  //  }

  //  changeUserName(uname){
  //   // this.username  = uname.value;

  //   this._designUtility.username.next(uname.value);
  // }


}
