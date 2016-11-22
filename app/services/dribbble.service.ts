/**
 * Created by dannyyassine on 2016-11-15.
 */
import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {DribbbleRequestOptions} from '../interfaceImpl/DribbbleRequestOptions';

@Injectable()
export class DribbbleService {

    constructor(private http: Http) {

    }

    public getShots(page: number = 1): Observable<any> {

        let searchParams = new URLSearchParams();
        searchParams.set('page', page.toString());
        let options = new DribbbleRequestOptions(searchParams);

        return this.http.get(`https://api.dribbble.com/v1/shots`, options)
            .map(response => response.json())
            .map(json => {
                return json;
            });
        
    }

    public getShot(shotId: number): Observable<any> {

        let options = new DribbbleRequestOptions(new URLSearchParams());

        return this.http.get(`https://api.dribbble.com/v1/shots/${shotId}`, options)
            .map(response => response.json())
            .map(json => {
                return json;
            });

    }

    public getComments(shotId: number): Observable<any> {
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