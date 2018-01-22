import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BottomTabsPage } from './bottom-tabs';

@NgModule({
  declarations: [
    BottomTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(BottomTabsPage),
  ]
})
export class BottomTabsPageModule {}
