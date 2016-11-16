/**
 * Created by dannyyassine on 2016-11-15.
 */
import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component'

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular!</h1><courses></courses>',
    providers: [CoursesComponent]
})
export class AppComponent { }