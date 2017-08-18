import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 1, text: 'Sample message 1'},
    {id: 2, text: 'Sample message 2'},
    {id: 3, text: 'Sample message 3'},
    {id: 4, text: 'Sample message 4'},
  ]

  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }
  constructor() { }

}
