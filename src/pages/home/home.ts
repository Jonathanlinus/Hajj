import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InputNumberPage} from '../input-number/input-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToInputNumber(){
 this.navCtrl.push(InputNumberPage);
  }
}
