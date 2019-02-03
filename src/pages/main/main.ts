import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

// import {CalendarPage} from '../calendar/calendar';
// import {FrontPage} from '../front/front';
// import {HomeCenterPage} from '../home-center/home-center';
// import {MessagePage} from '../message/message';
// import {TimePage} from '../time/time';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  timeRoot = 'TimePage'
  calendarRoot = 'CalendarPage'
  homeCenterRoot = 'HomeCenterPage'
  messageRoot = 'MessagePage'
  frontRoot = 'FrontPage'


  constructor(public navCtrl: NavController) {}

}
