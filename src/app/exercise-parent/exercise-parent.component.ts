import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-parent',
  templateUrl: './exercise-parent.component.html',
  styleUrls: ['./exercise-parent.component.css']
})
export class ExerciseParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      name:"Mukesh"
    }
  ];

  onRemoveUserItem(item){
    this.users.splice(item, 1);
  }

  onRemoveAdminItem(item){
    this.users.splice(item, 1);
  }

  onGetUser(value){
    
    console.log(value)
  }

}
