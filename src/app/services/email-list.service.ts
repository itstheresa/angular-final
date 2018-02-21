import { Injectable } from '@angular/core';

export interface Emails {
  sender: string;
  subject: string;
  date: string;
  message: string;
}

@Injectable()
export class EmailListService {

  email_inbox: Emails[] = [
    {sender:'Jason Proleika',subject:'Final Project',date:'Feb-19-2018',message:'Hey, when do you wanna work on the project?'}
  ]
  getAllEmails() {
    return this.email_inbox;
  }

  getFilteredEmails(value: string) {
    let filteredEmails: Emails[] = [];

    for(let i = 0; i < this.email_inbox.length; i++) {
      if(this.email_inbox[i].message.toLowerCase().indexOf(value.toLowerCase()) >= 0 || this.email_inbox[i].subject.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        filteredEmails.push(this.email_inbox[i]);
      }
    }

    return filteredEmails;
  }

  constructor() { }

}
