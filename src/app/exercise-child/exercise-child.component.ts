import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-child',
  templateUrl: './exercise-child.component.html',
  styleUrls: ['./exercise-child.component.css']
})
export class ExerciseChildComponent implements OnInit {

  @Input()
  count1:number = 0;
  count2:number = 0;

  @Input()
  userCount:any;

  @Input()
  adminCount:any;

  user:any;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onUserSelected = new EventEmitter<any>();

  onUserSent(){
    this.onUserSelected.emit(this.user);
  }

  onCreateUser(user){
    this.count1+=1;
    this.userCount = this.count1;
    this.user = user.value;
  }
   

  onCreateAdmin(admin){
    this.count2+=1;
    this.adminCount = this.count2;
    return admin.value
  }

}
