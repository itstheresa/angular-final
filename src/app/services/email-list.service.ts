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
    {sender:'Jason Proleika',subject:'Final Project',date:'Feb-19-2018',message:'Hey, when do you wanna work on the project?'},
    {sender:'Daniel Ponsini',subject:'Senior Project',date:'Feb-17-2018',message:'Theresa we have to work on the gyro/video synchronization.  It needs to be done in time for TCF.'},
    {sender:'Mike Steeil',subject:'Update on Parts Order + Robotics/IEEE Office?',date:'Feb-14-2018',message:'I entered your order last Friday.  It\'s scheduled to arrive on Wed.  \n' +
      '\n' +
      'Let me know when you & Phil are free and. I\'ll come by and meet with you guys, or feel free to stop by my office and we\'ll set something up. \n'},
    {sender:'Joe Jesson',subject:'New Ultra Low-cost Computers and Controllers',date:'Feb-9-2018',message:'ABSTRACT: ADVANCES IN INEXPENSIVE EMBEDDED SYSTEMS\n' +
      '\n' +
      'Several of the senior ECE, BME, and EE student projects and any engineer in a company requiring a quick prototype  of an embedded system, the frequent hardware choice is an arduino or raspberry Pi, Photon, or adndroid-compatible  cellphone/module , etc. and the engineer next determines what software languages and libraries are available for the implementation of a quick functional prototype.\n' +
      '\n' +
      'Joe will trace the cost/performance on a wireless embedded system over time and will highlight Gartner\'s IoT forecasts. Gartnet is a respected global market growth prediction service, and they predict "4 billion connected things will be in use worldwide in 2017, up 31 percent from 2016, and will reach 20.4 billion by 2020.(https://www.gartner.com)".\n' +
      '\n' +
      'Joe discusses new embedded system hardware,that include Procesor(s), GPIO\'s, SPI, i2c, A/D, WiFi ports & WiFi antenna, all included on a < 3cm board... for <$5.00!  A module discussed which includes the above hardware architecture elements, the ESP8266,is programmed with Arduino-compatible sketches using the standard Arduino IDE toolchain.  This complete module may be purchased for $2.00 (Alibaba) and the development board (USB interface, voltage regulator) can be purchased for under $10. '},
    {sender:'Al Katz',subject:'Re: EBlast',date:'Feb-7-2018',message:'Attached is the EBlast'},
    {sender:'Chelsea Cantone',subject:'Princeton NJ Escape Room',date:'Jan-24-2018',message:'YOU ARE CORDIALLY INVITED - Amazing Escape Room Princeton, New Jersey: Speakeasy Room'},
    {sender:'Danny Phamtom',subject:'Hello',date:'Jan-7-2018',message:'I\'m on fire'},
    {sender:'Haley Blanchard',subject:'No subject',date:'Sept-20-2018',message:'I love you'},
    {sender:'ChartaCloud Technologies',subject:'NAO Congress Presentation - Hoomano',date:'Nov-17-2016',message:'Greetings from The NAO 2016 Congress!\n' +
      '\n' +
      'Please find attached the Hoomano presentation.\n' +
      '\n' +
      'Please contact us at info@chartacloud.com if you would like to schedule and see a web demo of Hoomano.\n' +
      '\n' +
      'Call 603-580-1088 for any questions and ask for Lauryn!\n' +
      '\n' +
      'The Future is NAO!'}
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
