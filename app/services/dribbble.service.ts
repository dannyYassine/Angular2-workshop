/**
 * Created by dannyyassine on 2016-11-15.
 */
import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {DribbbleRequestOptions} from '../interfaceImpl/DribbbleRequestOptions';
import {Shot} from '../models/Shot'

@Injectable()
export class DribbbleService {

    public shots: Shot[];

    constructor(private http: Http) {
    }

    public getShots(page: number = 1): Observable<Shot[]> {

        let searchParams = new URLSearchParams();
        searchParams.set('page', page.toString());
        let options = new DribbbleRequestOptions(searchParams);

        return this.http.get(`https://api.dribbble.com/v1/shots`, options)
            .map(response => response.json())
            .map(json => {
                if (this.shots == null) { this.shots = [] }

                this.shots = this.shots.concat(json);
                console.log(this.shots);
                return json;
            });
    }

    public getShot(shotId: number): Observable<Shot> {

        let options = new DribbbleRequestOptions(new URLSearchParams());

        this.http.get(`https://api.dribbble.com/v1/shots/${shotId}`, options).toPromise().then();

        return this.http.get(`https://api.dribbble.com/v1/shots/${shotId}`, options)
            .map(response => response.json())
            .map(json => {
                return new Shot(json);
            });

    }

    public getComments(shotId: number): Observable<Array<Comment>> {
        let options = new DribbbleRequestOptions(new URLSearchParams());

        return this.http.get(`https://api.dribbble.com/v1/shots/${shotId}/comments`, options)
            .map(response => response.json())
            .map(json => {
                return json;
            });
    }

    public getCourses(): Array<string> {
        return ["Course1", "Course2", "Course3"];
    }

}