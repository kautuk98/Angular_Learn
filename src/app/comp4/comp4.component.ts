import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  username:any;
  constructor(private _designUtility: DesignutilityService) {
    this._designUtility.username.subscribe(user => {
      this.username = user;
    })
   }

   changeUserName(uname){
    // this.username  = uname.value;
    this._designUtility.username.next(uname.value);
  }
   
  ngOnInit(): void {
  }

}
