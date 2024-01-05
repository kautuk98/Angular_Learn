import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  // Difference between ViewChild and renderer
  username = "Youtube";

  @ViewChild('box') box: ElementRef;

  @ViewChild('child') child: Comp2Component;

  constructor(private renderer: Renderer2){

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.renderer.setStyle(this.box.nativeElement, "backgroundColor", "red")

    console.log(this.box);
    console.log(this.child)
    // this.box.nativeElement.innerText = "This is from Viewchild"

  }

  changeName(){
    this.child.username = "Hello from Parent"
  }

  changeEvent(){
    this.child.clickMe();
  }

  value:any;
  showComp:boolean = true;

  // hideComp(){
  //   this.showComp = false;
  // }

  // takeInput(input){
  //   this.value = input.value;
  // }


    // username:any;
  // constructor(private _designUtility: DesignutilityService) {
  //   this._designUtility.username.subscribe(user => {
  //     this.username = user;
  //   })
  //  }

}
