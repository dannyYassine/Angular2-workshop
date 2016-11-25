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
    </div>
    <div [hidden]="!submitted">
        <h1>Hello {{model.name}}!</h1>
        <h3>Your nickname is {{model.nickname}}</h3>
        <p>Your power is {{model.power}}</p>
        <button (click)="onReset($event)" class="btn-danger btn">Reset</button>
    </div>
    `,
    providers: [FormBuilder]
})
export class FormComponent {

    submitted = false;
    powers = ["Jump", "Dash", "Speed"]
    model = new Hero();

    constructor(public formBuilder:FormBuilder) {
        console.log("construct")
    }

    public doLogin(event) {
        event.preventDefault();
        console.log("hello");
        console.log(this.model)
        this.submitted = true;

    }

    public onReset(event) {
        this.submitted = false;
        this.model = new Hero();
    }

}