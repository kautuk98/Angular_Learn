import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';
// import { log } from 'console';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges,
 AfterContentInit, AfterContentChecked, AfterViewInit
 , AfterViewChecked, OnDestroy {

   @Input() myValue:string = "Carry";

  constructor(){
    console.log("Constructor called");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
    
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
    
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
    
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
    
  }

  



  // constructor(private _designUtility: DesignutilityService) {
  //   this._designUtility.username.subscribe(user => {
  //     this.username = user;
  //   })
  //  }


  // username:any;
  // changeUserName(uname){
    //   // this.username  = uname.value;
    //   this._designUtility.username.next(uname.value);
    // }
    
}
