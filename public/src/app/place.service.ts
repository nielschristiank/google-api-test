import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs';

@Injectable()
export class PlaceService {
  API_KEY: string = '&key=AIzaSyCWxzap9mC-3SFSRdKyaWuMVtOCaoGSj04';

  options: RequestOptions = new RequestOptions({
    headers: new Headers({
      // 'Origin': 'http://localhost:8000',
      // 'Accept': 'application/json',
      //'Data-Type': 'JSONP',
      'Access-Control-Allow-Origin': 'http://localhost:8000/',
      'Access-Control-Allow-Methods': 'GET, POST,, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  })

  constructor(private _http: Http, private _jsonp: Jsonp) {

    // this.options = new RequestOptions({
    //   headers: new Headers({
    //     // 'Origin': 'http://localhost:8000',
    //     // 'Accept': 'application/json',
    //     //'Data-Type': 'JSONP',
    //     'Access-Control-Allow-Origin': 'http://localhost:8000/',
    //     'Access-Control-Allow-Methods': 'GET, POST,, PATCH, PUT, DELETE, OPTIONS',
    //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    //   })
    // })
    console.log(this.options)

  }

  findPlace(place){
    return this._http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+friendly+parks+'+place+this.API_KEY, place)
    .map((response)=> {
      return response.json();
    })
    .toPromise();
  }

  // findPhoto(photoRef){
  //   return this._http.get('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+photoRef+this.API_KEY, this.options)
  //   .map((response)=> {
  //     return response.json();
  //   })
  //   .toPromise();
  // }

  findPlaceDetails(placeid){
    return this._http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+placeid+this.API_KEY, placeid)
    .map((response)=> {
      return response.json();
    })
    .toPromise();
  }

}
