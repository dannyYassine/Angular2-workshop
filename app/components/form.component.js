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
 * Created by dannyyassine on 2016-11-24.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var hero_1 = require("../models/hero");
var FormComponent = (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.powers = ["Jump", "Dash", "Speed"];
        this.model = new hero_1.Hero();
        console.log("construct");
    }
    FormComponent.prototype.doLogin = function (event) {
        event.preventDefault();
        console.log("hello");
        console.log(this.model);
        this.submitted = true;
    };
    FormComponent.prototype.onReset = function (event) {
        this.submitted = false;
        this.model = new hero_1.Hero();
    };
    FormComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container w-100\" [hidden]=\"submitted\">\n        <h1>Submit Form</h1>\n        <form \n            (ngSubmit)=\"doLogin($event)\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"alterEgo\">Nickname</label>\n            <input type=\"text\" class=\"form-control\" id=\"alterEgo\" [(ngModel)]=\"model.nickname\" name=\"power\" required>\n          </div>\n          <div class=\"form-group\">\n        <label for=\"power\">Hero Power</label>\n        <select class=\"form-control\" id=\"power\"\n                required\n                [(ngModel)]=\"model.power\" name=\"power\"\n                #power=\"ngModel\" >\n          <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\n        </select>\n      </div>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n    </div>\n    <div [hidden]=\"!submitted\">\n        <h1>Hello {{model.name}}!</h1>\n        <h3>Your nickname is {{model.nickname}}</h3>\n        <p>Your power is {{model.power}}</p>\n        <button (click)=\"onReset($event)\" class=\"btn-danger btn\">Reset</button>\n    </div>\n    ",
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map