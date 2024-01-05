import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http: HttpClient) { }

  messageAlert() {
    alert("Hello !! This is coming from the service");
  }

  // product = [
  //   {name: "Mobile", id: "001"},
  //   {name: "Laptop", id: "002"},
  //   {name: "Washing machine", id: "003"},
  //   {name: "TV", id: "004"}
  // ]

// How to use service :-
  url = 'https://jsonplaceholder.typicode.com/users';

  product(): Observable<any>{
    return this.http.get(this.url);
  }

  // How to use Subject and Behaviour subject:-

  // username = new Subject<any>();
  username = new BehaviorSubject<any>('Youtube');


}
