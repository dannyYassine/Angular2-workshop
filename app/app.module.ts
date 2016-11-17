/**
 * Created by dannyyassine on 2016-11-15.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { CoursesComponent } from './components/courses.component'
import { HttpModule } from '@angular/http';
import {DribbbleService} from './services/dribbble.service'
import {CourseService} from './services/course.service'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
    imports:      [ BrowserModule, HttpModule, AppRoutingModule],
    declarations: [ AppComponent, CoursesComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ CourseService, DribbbleService ]
})
export class AppModule { }