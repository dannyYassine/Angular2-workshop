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
/**
 * Created by dannyyassine on 2016-11-17.
 */
var core_1 = require('@angular/core');
var dribbble_service_1 = require('./../services/dribbble.service');
var router_1 = require('@angular/router');
var detail_shot_component_1 = require("./detail_shot.component");
var ShotComponent = (function () {
    function ShotComponent(dribbbleService, route) {
        this.dribbbleService = dribbbleService;
        this.route = route;
    }
    ShotComponent.prototype.ngOnInit = function () {
        var _this = this;
        var shotId = this.route.params['value'].id;
        this.dribbbleService.getShot(shotId).subscribe(function (json) {
            _this.shot = json;
            console.log(json);
        });
        this.dribbbleService.getComments(shotId).subscribe(function (json) {
            _this.comments = json;
        });
    };
    ShotComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ShotComponent.prototype.ngOnDestroy = function () {
        console.log("destroy");
    };
    ShotComponent = __decorate([
        core_1.Component({
            templateUrl: 'partials/shot.html',
            providers: [dribbble_service_1.DribbbleService, detail_shot_component_1.DetailShotComponent]
        }), 
        __metadata('design:paramtypes', [dribbble_service_1.DribbbleService, router_1.ActivatedRoute])
    ], ShotComponent);
    return ShotComponent;
}());
exports.ShotComponent = ShotComponent;
//# sourceMappingURL=shot.component.js.map