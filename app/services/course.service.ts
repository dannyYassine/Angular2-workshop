/**
 * Created by dannyyassine on 2016-11-15.
 */
import { Injectable }     from '@angular/core';

@Injectable()
export class CourseService {

    public getCourses(): Array<string> {
        return ["Course1", "Course2", "Course3"];
    }

}