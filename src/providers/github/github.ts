import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';

import { USER_LIST } from '../../mocks/user';
import { REPOSITORY_LIST } from '../../mocks/repository';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {
  baseUrl: string = 'https://api.github.com/users';
  reposUrl: string = 'repos';

  constructor(private http: Http) {

  }
  
  
  // Finds the name from within USER_LIST which equals username passed in
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }
  
  // Returns the mock repository information
  mockGetRepositoryInformation(username: string): Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }  

}