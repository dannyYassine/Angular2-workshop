/**
 * Created by dannyyassine on 2016-11-16.
 */

import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CoursesComponent } from './components/courses.component'
import { DribbbleComponent } from './components/dribbble.component'
import {ShotComponent} from "./components/shot.component";
import {HomeComponent} from "./components/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dribbble', component: DribbbleComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'shots', component: DribbbleComponent },
    { path: 'about', component: DribbbleComponent },
    { path: 'dribbble/:id', component: ShotComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}