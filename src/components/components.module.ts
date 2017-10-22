import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';
import {IonicModule} from 'ionic-angular';

@NgModule({
    declarations: [
        SearchResultsComponent    
    ],
    imports: [
        IonicModule    
    ],
    export: [
        SearchResultsComponent    
    ]
})

export class ComponentsModule{
    
}