import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Emails} from '../../services/email-list.service';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Input('Emails') email_inbox: Emails;

  @Output('Deletion') delete_email = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


}
