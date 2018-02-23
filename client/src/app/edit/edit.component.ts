import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  private sub: any;
  pet: any;
  error_name: any;
  error_type: any;
  error_description: any;

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
    this.getOnePet();
  }

  getOnePet() {
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      console.log("Successfully got pet data from server!", data);
      this.pet = data["data"];
    });
  };

  editPetThroughService() {
    this.error_name = null;
    this.error_type = null;
    this.error_description = null;
    let observable = this._httpService.updatePet(this.pet);
    observable.subscribe(data => {
      console.log("Successfully update data to server", data);
      if (data.message == "Error Name") {
        this.error_name = data;
      } else if (data.message == "Error Type") {
        this.error_type = data;
      } else if (data.message == "Error Description") {
        this.error_description = data;
      } else {
        this._router.navigate(["/details/" + this.pet._id]);
      };
    });
  };

  reRouteToHome() {
    this._router.navigate(["/"]);
  };

}
