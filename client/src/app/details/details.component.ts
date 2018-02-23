import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private sub: any;
  id: String;
  pet: any;
  editPet: any;
  // disabled: Boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    ///////////// URL parameter extract /////////////////
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    /////////////////////////////////////////////////////
    // this.disabled = false;
    this.getOnePet();
  };

  getOnePet () {
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe ( data => {
      console.log("Successfully got pet data from server!", data);
      this.pet = data["data"];
    });
  };

  likesUp (petobj) {
    this.editPet = petobj;
    this.editPet.likes += 1;
    let observable = this._httpService.updatePet(this.editPet);
    observable.subscribe(data => {
      console.log("Successfully updated about likes!", data);
      this.getOnePet();
    });
  };

  // button() {}

  adoptPet (petobj) {
    let observable = this._httpService.removePet(petobj);
    observable.subscribe( data => {
      console.log("Successfully removed from server!", data);
      this._router.navigate(["/"]);
      // this.getOnePet();
    });
  }

  reRouteToHome() {
    this._router.navigate(["/"]);
  };

}
