import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the BottomTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bottom-tabs',
  templateUrl: 'bottom-tabs.html'
})
export class BottomTabsPage {

  profileRoot = 'ProfilePage'
  activitiesRoot = 'ActivitiesPage'
  messagesRoot = 'MessagesPage'


  constructor(public navCtrl: NavController) {}

}
