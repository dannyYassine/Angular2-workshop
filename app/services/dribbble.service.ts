/**
 * Created by dannyyassine on 2016-11-15.
 */
import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DribbbleService {

    constructor(private http: Http) {

    }

    public getShots(page: number = 1): Observable<any> {
        let params = {
            access_token: 'f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55',
            callback: 'JSON_CALLBACK'
        };
        return this.http.get(`https://api.dribbble.com/v1/shots?access_token=f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55&page=${page}`)
            .map(response => response.json())
            .map(json => {
                return json;
            });
        
    }

    public getShot(shotId: number): Observable<any> {

        return this.http.get(`https://api.dribbble.com/v1/shots/${shotId}?access_token=f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55&page`)
            .map(response => response.json())
            .map(json => {
                return json;
            });

    }

    public getComments(shotId: number): Observable<any> {
        return this.http.get(`https://api.dribbble.com/v1/shots/${shotId}/comments?access_token=f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55&page`)
            .map(response => response.json())
            .map(json => {
                return json;
            });
    }

    public getCourses(): Array<string> {
        return ["Course1", "Course2", "Course3"];
    }

}