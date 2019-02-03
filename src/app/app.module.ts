import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InputNumberPage} from '../pages/input-number/input-number';
import{InputCodePage} from '../pages/input-code/input-code';
import {MainPage } from '../pages/main/main';
import { HajTamatoListPage} from '../pages/haj-tamato-list/haj-tamato-list';
import{KoliatAmalHajPage} from '../pages/koliat-amal-haj/koliat-amal-haj';
//import {HomeCenterPage} from '../pages/home-center/home-center';
// import {TimePage} from '../pages/time/time';
// import {CalendarPage} from '../pages/calendar/calendar';
// import {MessagePage} from '../pages/message/message';
// import {FrontPage} from '../pages/front/front';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InputNumberPage,
    InputCodePage,
    MainPage,
   // HomeCenterPage,
    // TimePage,
    // CalendarPage,
    // MessagePage,
    // FrontPage
    HajTamatoListPage,
    KoliatAmalHajPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InputNumberPage,
    InputCodePage,
    MainPage,
   // HomeCenterPage,
    // TimePage,
    // CalendarPage,
    // MessagePage,
    // FrontPage
    HajTamatoListPage,
    KoliatAmalHajPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
