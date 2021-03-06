/**
 * Created by dannyyassine on 2016-11-15.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { CoursesComponent } from './components/courses.component'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {DribbbleService} from './services/dribbble.service'
import {CourseService} from './services/course.service'
import {AppRoutingModule} from './app-routing.module'
import {DribbbleComponent} from './components/dribbble.component'
import {ShotComponent} from "./components/shot.component";
import {DetailShotComponent} from './components/detail_shot.component';
import {CommentListComponent} from './components/comment_list.component';
import {HomeComponent} from "./components/home.component";
import {FormComponent} from "./components/form.component";

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CoursesComponent,
        DribbbleComponent,
        ShotComponent,
        DetailShotComponent,
        CommentListComponent,
        HomeComponent,
        FormComponent
    ],
    bootstrap:    [
        AppComponent
    ],
    providers: [
        CourseService,
        DribbbleService ]
})
export class AppModule { }