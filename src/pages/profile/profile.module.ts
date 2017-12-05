import { NgModule } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ProfileSearchPage } from './profile-search';

@NgModule({
  declarations: [
    ProfileSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchPage),
  ],
})
export class ProfileSearchPageModule {}
