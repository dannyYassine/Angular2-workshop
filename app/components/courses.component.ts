/**
 * Created by dannyyassine on 2016-11-15.
 */

import {Component} from '@angular/core'
import {CourseService} from './../services/course.service'
import {DribbbleService} from './../services/dribbble.service'

@Component({
    selector: 'courses',
    templateUrl: 'partials/shots_list.html',
    providers: [CourseService, DribbbleService]
})
export class CoursesComponent {
    title:string = "Course title";
    courses;
    shots;
    page = 1;
    courseService;

    constructor(courseService:CourseService, private dribbbleService: DribbbleService) {
        this.courseService = courseService
    }

    ngOnInit() {
        this.courses = this.courseService.getCourses();
        this.dribbbleService.getShots().subscribe(json => {
            this.shots = json;
            this.page += 1;
        });
    }

    public loadNextPage() {
        this.dribbbleService.getShots(this.page).subscribe(json => {
            this.shots = this.shots.concat(json);
            this.page += 1;
        });
    }

}