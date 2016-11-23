/**
 * Created by dannyyassine on 2016-11-15.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./components/app.component');
var courses_component_1 = require('./components/courses.component');
var http_1 = require('@angular/http');
var dribbble_service_1 = require('./services/dribbble.service');
var course_service_1 = require('./services/course.service');
var app_routing_module_1 = require('./app-routing.module');
var dribbble_component_1 = require('./components/dribbble.component');
var shot_component_1 = require("./components/shot.component");
var detail_shot_component_1 = require('./components/detail_shot.component');
var comment_list_component_1 = require('./components/comment_list.component');
var home_component_1 = require("./components/home.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                courses_component_1.CoursesComponent,
                dribbble_component_1.DribbbleComponent,
                shot_component_1.ShotComponent,
                detail_shot_component_1.DetailShotComponent,
                comment_list_component_1.CommentListComponent,
                home_component_1.HomeComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                course_service_1.CourseService,
                dribbble_service_1.DribbbleService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=../dist/app.module.js.map
