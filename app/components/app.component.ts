/**
 * Created by dannyyassine on 2016-11-15.
 */
import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component'
import {RouterOutlet, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app_root.html',
    providers: [CoursesComponent]
})
export class AppComponent {
}