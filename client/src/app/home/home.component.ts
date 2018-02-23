import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAllPetsFromService();
  }

  getAllPetsFromService () {
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Successfully added data to server!", data);
      this.pets = data["data"];
    });
  };

}
