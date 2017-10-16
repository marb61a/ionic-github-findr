import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../models/user.interface';
import { } from '../mocks/user.mocks';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor(public http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }
  
  mockGetUserInformation(): Observable<User> {
    
  }

}
