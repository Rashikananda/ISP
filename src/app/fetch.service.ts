import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {


    constructor(private httpClient: HttpClient) { }
    
    getISPDetails() {
     return  this.httpClient.get(environment.url + 'api/getIsps')
    }
}
