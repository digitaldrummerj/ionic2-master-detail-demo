import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { UserService} from '../../providers/user-service/user-service'
import {ContactDetailsPage } from '../contact-details/contact-details'
@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [UserService]
})
export class ContactPage {
  public users: any[];
  constructor(private navCtrl: NavController, public userService: UserService) {
    this.userService.getUsers(5)
      .subscribe(data => {
        this.users = data.results;
      });
  }

  doRefresh(refresher) {
    console.log('Refreshing!', refresher);

    this.userService.getUsers(1)
      .subscribe(data => {
        this.users.push(data.results[0]);
      });

    refresher.complete();
  }

  goToUserDetail(user) {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(ContactDetailsPage, user);
  }

}
