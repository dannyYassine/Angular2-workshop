/**
 * Created by dannyyassine on 2016-11-16.
 */

import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CoursesComponent } from './components/courses.component'

const routes: Routes = [
    { path: '**', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: CoursesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}