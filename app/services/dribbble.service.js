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
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var DribbbleRequestOptions_1 = require('../interfaceImpl/DribbbleRequestOptions');
var Shot_1 = require('../models/Shot');
var DribbbleService = (function () {
    function DribbbleService(http) {
        this.http = http;
    }
    DribbbleService.prototype.getShots = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var searchParams = new http_1.URLSearchParams();
        searchParams.set('page', page.toString());
        var options = new DribbbleRequestOptions_1.DribbbleRequestOptions(searchParams);
        return this.http.get("https://api.dribbble.com/v1/shots", options)
            .map(function (response) { return response.json(); })
            .map(function (json) {
            if (_this.shots == null) {
                _this.shots = [];
            }
            _this.shots = _this.shots.concat(json);
            console.log(_this.shots);
            return json;
        });
    };
    DribbbleService.prototype.getShot = function (shotId) {
        var options = new DribbbleRequestOptions_1.DribbbleRequestOptions(new http_1.URLSearchParams());
        this.http.get("https://api.dribbble.com/v1/shots/" + shotId, options).toPromise().then();
        return this.http.get("https://api.dribbble.com/v1/shots/" + shotId, options)
            .map(function (response) { return response.json(); })
            .map(function (json) {
            return new Shot_1.Shot(json);
        });
    };
    DribbbleService.prototype.getComments = function (shotId) {
        var options = new DribbbleRequestOptions_1.DribbbleRequestOptions(new http_1.URLSearchParams());
        return this.http.get("https://api.dribbble.com/v1/shots/" + shotId + "/comments", options)
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