/**
 * Created by dannyyassine on 2016-11-15.
 */
import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component'
import {RouterOutlet, ActivatedRoute, Router} from '@angular/router'

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app_root.html',
    providers: [CoursesComponent]
})
export class AppComponent {
    constructor() {

    }

    ngOnInit() {
        setTimeout(this.dismissLoadingScreen, 1000);
    }

    private dismissLoadingScreen() {
        let loadingContainer = document.getElementById("div-loading-container");
        loadingContainer.classList.add("fade-animation");
        setTimeout(function() {
            loadingContainer.remove();
        }, 500);
    }

}