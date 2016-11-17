/**
 * Created by dannyyassine on 2016-11-15.
 */

import {Component} from '@angular/core'
import {CourseService} from './../services/course.service'
import {DribbbleService} from './../services/dribbble.service'

@Component({
    selector: 'courses',
    templateUrl: 'partials/course_list.html',
    providers: [CourseService]
})
export class CoursesComponent {
    title:string = "Course title";
    courses;
    shots;
    page = 1;
    courseService;

    constructor(courseService:CourseService) {
        this.courseService = courseService
    }

    ngOnInit() {
        this.courses = this.courseService.getCourses();
    }
}