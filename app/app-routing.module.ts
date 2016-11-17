/**
 * Created by dannyyassine on 2016-11-16.
 */

import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CoursesComponent } from './components/courses.component'
import { DribbbleComponent } from './components/dribbble.component'

const routes: Routes = [
    { path: 'dribbble', component: DribbbleComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '**', redirectTo: '/dribbble', pathMatch: 'full'}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}