/**
 * Created by dannyyassine on 2016-11-17.
 */
import {Component} from '@angular/core'
import {DribbbleService} from './../services/dribbble.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl: 'partials/shot.html',
    providers: [DribbbleService]
})
export class ShotComponent {

    shot: any;

    constructor(private dribbbleService: DribbbleService, private route: ActivatedRoute) {
        let shotId = this.route.params['value'].id;
        console.log(shotId);
        this.dribbbleService.getShot(shotId).subscribe(json => {
            this.shot = json;
            console.log(this.shot)
        })
    }

    // ngOnInit() {
    //     let shotId = this.route.params['value'].id;
    //     console.log(shotId);
    //     this.dribbbleService.getShot(shotId).subscribe(json => {
    //         this.shot = json;
    //         console.log(this.shot)
    //     })
    // }

}