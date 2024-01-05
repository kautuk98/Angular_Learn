import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { DesignutilityService } from '../services/designutility.service';


@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService: DesignutilityService) { }

  product = {}

  ngOnInit(): void {
    
  }

  btnClick(){
   this._msgService.messageAlert();
  }


}
