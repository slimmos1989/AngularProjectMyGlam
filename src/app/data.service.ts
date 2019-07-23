import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService  {
  apiUrl='https://jsonp.afeld.me/?url=https%3A%2F%2Fapi.myglamapp.pl%2Fapi%2Fcategories%3Flanguage%3DEN';
 
  constructor(private _http : HttpClient) { }

  getJson(){
    return this._http.get(this.apiUrl);
  }
 
}
