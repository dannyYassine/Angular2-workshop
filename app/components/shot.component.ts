/**
 * Created by dannyyassine on 2016-11-17.
 */
import {Component} from '@angular/core'
import {DribbbleService} from './../services/dribbble.service'
import {ActivatedRoute} from '@angular/router'
import {DetailShotComponent} from "./detail_shot.component";
import {CommentListComponent} from "./comment_list.component";
import {Shot} from '../models/Shot'

@Component({
    templateUrl: 'partials/shot.html',
    providers: [DribbbleService]
})
export class ShotComponent {

    shot: Shot;
    comments;

    constructor(private dribbbleService: DribbbleService, private route: ActivatedRoute) {}

    ngOnInit() {
        let shotId = this.route.params['value'].id;

        this.dribbbleService.getShot(shotId).subscribe(json => {
            this.shot = json;
            console.log(json);
        });

        this.dribbbleService.getComments(shotId).subscribe(json => {
            this.comments = json;
        })
    }

    ngOnChanges(changes) {
        console.log("changes", changes);
    }

    ngOnDestroy() {
        console.log("destroy");
    }

}