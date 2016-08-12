import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
/*
  Generated class for the ContactDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/contact-details/contact-details.html',
})
export class ContactDetailsPage {
  user: any;

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
  }

}
