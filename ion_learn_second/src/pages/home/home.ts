import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
  }
  loginScreen() {
    this.navCtrl.push("LoginPage");
  }

  createAccount() {
    this.navCtrl.push("RegisterPage");
  }
}
