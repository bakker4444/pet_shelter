import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  pet: any;
  error: any;
  error_name: any;
  error_type: any;
  error_description: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.pet = {
      petname: "",
      pettype: "",
      description: "",
      skill_1: "",
      skill_2: "",
      skill_3: "",
      likes: 0
    };
  }

  addPetThroughService() {
    this.error_name = null;
    this.error_type = null;
    this.error_description = null;
    let observable = this._httpService.addPet(this.pet);
    observable.subscribe ( data => {
      console.log(data);
      if (data.message == "Error Name") {
        this.error_name = data;
      } else if (data.message == "Error Type") {
        this.error_type = data;
      } else if (data.message == "Error Description") {
        this.error_description = data;
      } else {
        this._router.navigate(["/"]);
      }
    });
  }

  reRouteToHome() {
    this._router.navigate(["/"]);
  };

}
