import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent    {

  constructor() { }

  ngOnInit() {
  }

  items = ["Angular","java", "C", "NPM"];

  newItem:string = "";
  pushItem = function(){
    // console.log(this.newItem);
      if(this.newItem != "") {
        console.log(this.newItem);
        this.items.push(this.newItem);
        this.newItem="";
      }
  }

  removeItem = function(index){

    this.items.splice(index,1);
   
  }
}
