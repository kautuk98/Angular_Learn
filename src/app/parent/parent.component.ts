import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proSelected:boolean = false;
  selectedPro:string;
  addedProduct:any;
  

  onSelectProduct(product){
    this.proSelected = true;
    this.selectedPro = product;
  }

  onAddingProduct(proData){
    this.addedProduct = proData;
  }

}
