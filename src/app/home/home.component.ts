import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obj = {

    id:1,
    name:"Kush"
  }

  arr = ["a","b","c"];

  flag = false;

  myName = "shri";
}
