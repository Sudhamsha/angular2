import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    <input type="text" #myInput/>
      <input (click)="onClick($event)" type="button" value="Click me!"/>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  onClick(val){
    console.log("Hello World! Input value is ", val)
  }
  ngOnInit() {
  }

}
