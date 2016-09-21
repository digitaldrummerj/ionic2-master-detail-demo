import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactPage } from '../contact/contact'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

  goToContacts() {
    this.navCtrl.push(ContactPage);
  }
}
