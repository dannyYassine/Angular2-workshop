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
var dribbble_service_1 = require('./../services/dribbble.service');
var DribbbleComponent = (function () {
    function DribbbleComponent(dribbbleService) {
        this.dribbbleService = dribbbleService;
        this.title = "Course title";
        this.page = 1;
    }
    DribbbleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dribbbleService.getShots().subscribe(function (json) {
            _this.shots = json;
            console.log(json);
            _this.page += 1;
        });
    };
    DribbbleComponent.prototype.loadNextPage = function () {
        var _this = this;
        this.dribbbleService.getShots(this.page).subscribe(function (json) {
            _this.shots = _this.shots.concat(json);
            _this.page += 1;
        });
    };
    DribbbleComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            templateUrl: 'partials/shots_list.html',
            providers: [dribbble_service_1.DribbbleService]
        }), 
        __metadata('design:paramtypes', [dribbble_service_1.DribbbleService])
    ], DribbbleComponent);
    return DribbbleComponent;
}());
exports.DribbbleComponent = DribbbleComponent;
//# sourceMappingURL=dribbble.component.js.map