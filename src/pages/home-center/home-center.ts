import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HajTamatoListPage} from '../haj-tamato-list/haj-tamato-list'



@IonicPage()
@Component({
  selector: 'page-home-center',
  templateUrl: 'home-center.html',
})
export class HomeCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToHajTamatoList(){
    this.navCtrl.push(HajTamatoListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCenterPage');
  }

}
