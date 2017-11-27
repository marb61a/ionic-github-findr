import { Component, Input } from '@angular/core';
import { } from '../../models/user';

/**
 * Generated class for the SearchResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsComponent {
  @Input() user: User
  
  constructor(){
  }
}
