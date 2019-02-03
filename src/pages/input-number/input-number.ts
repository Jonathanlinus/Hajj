import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {InputCodePage} from '../input-code/input-code';

/**
 * Generated class for the InputNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-number',
  templateUrl: 'input-number.html',
})
export class InputNumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToInputCode(){
  this.navCtrl.push(InputCodePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InputNumberPage');
  }

}
