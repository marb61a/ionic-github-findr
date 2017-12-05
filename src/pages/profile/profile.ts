import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  username: string = "";
  user: User

  constructor(private navCtrl: NavController) {
  }
  
  searchAgain(): void {
    this.user = null;
    this.username = "";
  }

  getUserInformation(): void {
    this.navCtrl.push('ProfileSearchResultsPage', {
      username: this.username
    });
    
  }

}
