import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {KoliatAmalHajPage} from '../../pages/koliat-amal-haj/koliat-amal-haj';

/**
 * Generated class for the HajTamatoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-haj-tamato-list',
  templateUrl: 'haj-tamato-list.html',
})
export class HajTamatoListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToKoliatAmalHaj(){
this.navCtrl.push(KoliatAmalHajPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HajTamatoListPage');
  }

}
