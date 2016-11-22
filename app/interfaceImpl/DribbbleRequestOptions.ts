/**
 * Created by dannyyassine on 2016-11-22.
 */
import {RequestOptionsArgs, URLSearchParams } from '@angular/http';

export class DribbbleRequestOptions implements RequestOptionsArgs {

    search: URLSearchParams;

    constructor(private searchParams) {
        searchParams.set('access_token', 'f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55');
        this.search = searchParams;
    }

}