import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getPets() {
    return this._http.get("/pets");
  }

  getOnePet(petid) {
    return this._http.get("/pets/" + petid);
  }

  addPet(data) {
    return this._http.post("/pets", data);
  }

  updatePet(petobj) {
    return this._http.put("/pets", petobj);
  }

  removePet(petobj) {
    return this._http.delete("/pets/" + petobj._id);
  }

}
