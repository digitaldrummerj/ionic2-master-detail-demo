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

    //setTimeout added for demo to be able to show refresher working.
    //if worked too fast without it to really show what it was doing. 
    setTimeout(() => {
      console.log('Async operation has ended');
      this.userService.getUsers(1)
        .subscribe(data => {
          this.users.push(data.results[0]);
        });
      refresher.complete();
    }, 2000);

    // Save code as above but without the simulated delay.      
    // this.userService.getUsers(1)
    //   .subscribe(data => {
    //     this.users.push(data.results[0]);
    //   });

    // refresher.complete();
  }

  goToUserDetail(user) {
    // go to the contact detail page
    // and pass in the user data
    this.navCtrl.push(ContactDetailsPage, user);
  }
}
