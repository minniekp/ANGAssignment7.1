import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  firstName = "Mrunalini" ;
  lastName = "Prasad";
  myVar = false;
    
  constructor() { }

  ngOnInit() {
  }

}
