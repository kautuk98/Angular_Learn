import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productSelected:boolean = false;
  @Input() selectedProduct:string;
  @Output() addedProduct = new EventEmitter<any>();


  onAddedProduct(){
    this.addedProduct.emit(this.selectedProduct);
  }

}
