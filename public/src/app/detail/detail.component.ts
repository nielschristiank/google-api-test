import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceService } from './../place.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  place: any = {};
  API_KEY: string = '&key=AIzaSyCWxzap9mC-3SFSRdKyaWuMVtOCaoGSj04';

  constructor(private _placeService: PlaceService, private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      this._placeService.findPlaceDetails(param.id)
      .then((data)=>{console.log(data);this.place = data.result; console.log(this.place);})
      .catch((err)=>{console.log(err);});
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){

  }


}
