/**
 * Created by dannyyassine on 2016-11-21.
 */
import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'comments',
    templateUrl: 'partials/comments.html'
})
export class CommentListComponent {

    @Input() comments;

    constructor() {
    }

    ngOnInit() {
    }
}