import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MainPage } from '../main/main';


@IonicPage()
@Component({
  selector: 'page-input-code',
  templateUrl: 'input-code.html',
})
export class InputCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToFirstMain(){
    this.navCtrl.push(MainPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputCodePage');
  }

}
