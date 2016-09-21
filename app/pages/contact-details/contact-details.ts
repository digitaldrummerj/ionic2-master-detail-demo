import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact-details/contact-details.html',
})
export class ContactDetailsPage {
  user: any;

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    console.log(navParams.data);
  }

}
