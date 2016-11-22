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
 * Created by dannyyassine on 2016-11-15.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var DribbbleService = (function () {
    function DribbbleService(http) {
        this.http = http;
    }
    DribbbleService.prototype.getShots = function (page) {
        if (page === void 0) { page = 1; }
        var params = {
            access_token: 'f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55',
            callback: 'JSON_CALLBACK'
        };
        return this.http.get("https://api.dribbble.com/v1/shots?access_token=f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55&page=" + page)
            .map(function (response) { return response.json(); })
            .map(function (json) {
            return json;
        });
    };
    DribbbleService.prototype.getShot = function (shotId) {
        return this.http.get("https://api.dribbble.com/v1/shots/" + shotId + "?access_token=f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55&page")
            .map(function (response) { return response.json(); })
            .map(function (json) {
            return json;
        });
    };
    DribbbleService.prototype.getComments = function (shotId) {
        return this.http.get("https://api.dribbble.com/v1/shots/" + shotId + "/comments?access_token=f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55&page")
            .map(function (response) { return response.json(); })
            .map(function (json) {
            return json;
        });
    };
    DribbbleService.prototype.getCourses = function () {
        return ["Course1", "Course2", "Course3"];
    };
    DribbbleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DribbbleService);
    return DribbbleService;
}());
exports.DribbbleService = DribbbleService;
//# sourceMappingURL=dribbble.service.js.map