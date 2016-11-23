/**
 * Created by dannyyassine on 2016-11-15.
 */

import {Component} from '@angular/core'
import {DribbbleService} from './../services/dribbble.service'
import {Shot} from "../models/Shot";

@Component({
    selector: 'courses',
    templateUrl: 'partials/shots_list.html',
    providers: [DribbbleService]
})
export class DribbbleComponent {

    public title: string = "Course title";
    public courses: Array<string>;
    public shots: Array<Shot>;
    public page = 1;

    constructor(private dribbbleService: DribbbleService) {
    }

    ngOnInit() {
        this.dribbbleService.getShots().subscribe(json => {
            this.shots = json;
            this.page += 1;
        });
    }

    public loadNextPage(event) {

        this.dribbbleService.getShots(this.page).subscribe(json => {
            this.shots = this.shots.concat(json);
            this.page += 1;
        });
    }

}