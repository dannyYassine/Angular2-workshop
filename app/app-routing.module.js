/**
 * Created by dannyyassine on 2016-11-16.
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
var router_1 = require('@angular/router');
var courses_component_1 = require('./components/courses.component');
var dribbble_component_1 = require('./components/dribbble.component');
var shot_component_1 = require("./components/shot.component");
var home_component_1 = require("./components/home.component");
var form_component_1 = require("./components/form.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'dribbble', component: dribbble_component_1.DribbbleComponent },
    { path: 'courses', component: courses_component_1.CoursesComponent },
    { path: 'shots', component: dribbble_component_1.DribbbleComponent },
    { path: 'form', component: form_component_1.FormComponent },
    { path: 'dribbble/:id', component: shot_component_1.ShotComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map