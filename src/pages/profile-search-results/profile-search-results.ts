import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service/github-service';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;

  constructor(private github: GithubService, private navCtrl: NavController, private navParams: NavParams) {
  }
  
  getUserInformation():void {
    this.github.mockGetUserInformation(this.username)
      .subscribe(data => console.log(data));
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username){
      this.getUserInformation();
    }
  }

}
