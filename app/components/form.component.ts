/**
 * Created by dannyyassine on 2016-11-24.
 */
import {Component} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Hero} from "../models/hero";

@Component({
    template: `
    <div class="container w-100" [hidden]="submitted">
        <h1>Submit Form</h1>
        <form 
            (ngSubmit)="doLogin($event)">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name">
          </div>
          <div class="form-group">
            <label for="alterEgo">Nickname</label>
            <input type="text" class="form-control" id="alterEgo" [(ngModel)]="model.nickname" name="power" required>
          </div>
          <div class="form-group">
        <label for="power">Hero Power</label>
        <select class="form-control" id="power"
                required
                [(ngModel)]="model.power" name="power"
                #power="ngModel" >
          <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
        </select>
      </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
          <button class="btn btn-default" (click)="onInject($event)" [disabled]="isDisabled">Inject</button>
    </div>
              <img [src]="imageUrl" [height]="imageHeight" [width]="imageWidth"/>
          <button [ngClass]="classes" (click)="onPlus()"> + </button>
          <button (click)="onMinus()"> - </button>
    <div [hidden]="!submitted">
        <h1>Hello {{model.name}}!</h1>
        <h3>Your nickname is {{model.nickname}}</h3>
        <p>Your power is {{model.power}}</p>
        <button (click)="onReset($event)" class="btn-danger btn">Reset</button>
    </div>
    <h4>{{model.name}}</h4>
    <input [ngModel]="model.lastName" (ngModelChange)="onChange($event)">
    `,
    providers: [FormBuilder]
})
export class FormComponent {

    submitted = false;
    powers = ["Jump", "Dash", "Speed"]
    model = new Hero();
    isDisabled =  false;

    imageUrl;
    imageHeight;
    imageWidth;

    classes = [];

    constructor(public formBuilder:FormBuilder) {
        console.log("construct")
        this.classes.push("btn");
        this.classes.push("btn-primary");
    }

    public doLogin(event) {
        event.preventDefault();
        console.log("hello");
        console.log(this.model)
        this.submitted = true;
    }

    public onInject(event) {
        this.model.name = "Danny";
        this.model.nickname = "nickname";
        this.model.power = this.powers[2];

        this.isDisabled = !this.isDisabled;

        this.imageUrl = "http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Oicture-Dubai-Landmarks-800x600.jpg";

        this.imageHeight = 500;
        this.imageWidth = 500;

    }

    public onPlus() {
        this.imageHeight += 100;
        this.imageWidth += 100;
    }

    public onMinus() {
        this.imageHeight -= 100;
        this.imageWidth -= 100;
    }

    public onReset(event) {
        this.submitted = false;
        this.model = new Hero();
    }

    public onModelChange() {
        console.log(this.model.name);
    }

    public onChange(event) {
        console.log(event);
        this.model.lastName = event;
    }

}