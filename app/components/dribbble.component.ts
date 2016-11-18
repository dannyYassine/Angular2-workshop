/**
 * Created by dannyyassine on 2016-11-15.
 */

import {Component} from '@angular/core'
import {DribbbleService} from './../services/dribbble.service'
import {Router} from '@angular/router'

@Component({
    selector: 'courses',
    templateUrl: 'partials/shots_list.html',
    providers: [DribbbleService]
})
export class DribbbleComponent {
    title:string = "Course title";
    courses;
    shots;
    page = 1;

    constructor(private dribbbleService: DribbbleService) {
    }

    ngOnInit() {
        this.dribbbleService.getShots().subscribe(json => {
            this.shots = json;
            console.log(json);
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