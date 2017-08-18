import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    <input 
      #myInput 
      type="text" 
      [(ngModel)]="message" 
      />
      <input (click)="update.emit({text:message})" type="button" value="Click me!"/>
    </div>
  `,
  styles: [`
    .mousedown{
        border: 1px solid green;
    }
`]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  @Output() update = new EventEmitter();
  onMouseDown = false;
  constructor() { }

  ngOnInit() {
  }

}
