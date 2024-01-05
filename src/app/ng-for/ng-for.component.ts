import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  products = [
    {proimg:"../assets/laptop.jpg", name:"Laptop", id:"PR1", price:"15000"},
    {proimg:"../assets/mobile.jpg", name:"Mobile", id:"PR2", price:"8000"},
    {proimg:"../assets/TV.jpg", name:"TV", id:"PR3", price:"10000"},
    {proimg:"../assets/washing.jpg", name:"Washing Machine", id:"PR4", price:"120000"}
  ]

  users = [];

  onSubmitUser(uname){
    this.users.push({
      name: uname.value
    });

    if(this.users.length > 3){
      this.router.navigate(['products']);
    }
  }

  onRemoveUser(){
    // this.users.splice(this.users.length - 1);
    this.users.pop();
  }

  onRemoveItem(item){
    this.users.splice(item, 1);
  }
}
