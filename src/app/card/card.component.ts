import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _msgService2: DesignutilityService) { }

  product:any;

  ngOnInit(): void {
    // this.product = this._msgService2.product;

    this._msgService2.product()
    .subscribe(data => this.product= data)
  }

  btnClick(){
    this._msgService2.messageAlert();
  }

}
