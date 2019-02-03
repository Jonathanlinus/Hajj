import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCenterPage } from './home-center';

@NgModule({
  declarations: [
    HomeCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCenterPage),
  ],
})
export class HomeCenterPageModule {}
