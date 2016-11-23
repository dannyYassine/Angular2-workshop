/**
 * Created by dannyyassine on 2016-11-21.
 */
import {Component, Input} from '@angular/core'

@Component({
    selector: 'detail-shot',
    templateUrl: `partials/header_shot.html`
})
export class DetailShotComponent {

    @Input() shot;
    
    constructor() {

    }

    ngOnChanges(changes) {
        console.log(changes);
    }

}
