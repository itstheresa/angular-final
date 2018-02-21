import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmailComponent } from './component/email/email.component';
import {EmailListService} from './services/email-list.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [EmailListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
