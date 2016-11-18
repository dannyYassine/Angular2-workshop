/**
 * Created by dannyyassine on 2016-11-16.
 */

import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CoursesComponent } from './components/courses.component'
import { DribbbleComponent } from './components/dribbble.component'
import {ShotComponent} from "./components/shot.component";

const routes: Routes = [
    { path: 'dribbble', component: DribbbleComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'dribbble/:id', component: ShotComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}