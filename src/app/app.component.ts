import { Component } from '@angular/core';
import {EmailListService, Emails} from './services/email-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display_emails: Emails[];
  search_value: string;

  constructor(private _emailSet: EmailListService) {}

  ngOnInit() {
    this.display_emails = this._emailSet.getAllEmails();
  }

  onTyping(event) {
    this.display_emails = this._emailSet.getFilteredEmails(this.search_value);
  }
}
