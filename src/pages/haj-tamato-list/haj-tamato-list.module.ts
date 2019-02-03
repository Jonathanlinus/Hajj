import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HajTamatoListPage } from './haj-tamato-list';

@NgModule({
  declarations: [
    HajTamatoListPage,
  ],
  imports: [
    IonicPageModule.forChild(HajTamatoListPage),
  ],
})
export class HajTamatoListPageModule {}
