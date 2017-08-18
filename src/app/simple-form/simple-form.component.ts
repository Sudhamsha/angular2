import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    
    <input type="text" value="{{message}}" #myInput/>
      <input (click)="onClick($event)" type="button" value="Click me!"/>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  constructor() { }

  onClick(val){
    console.log("Hello World! Input value is ", val)
  }
  ngOnInit() {
  }

}
