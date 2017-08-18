import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    'Sample message 1',
    'Sample message 2',
    'Sample message 3',
    'Sample message 4',
  ]
  constructor() { }

}
