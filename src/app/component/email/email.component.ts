import {Component, Input, OnInit} from '@angular/core';
import {Emails} from '../../services/email-list.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Input('Emails') email_inbox: Emails;

  constructor() { }

  ngOnInit() {
  }

}
