import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-perkuliahan',
  templateUrl: './perkuliahan.component.html',
  styleUrls: ['./perkuliahan.component.css']
})
export class PerkuliahanComponent implements OnInit {

  baseUrl = 'http://localhost:5000/api/';
  perkuliahans: any;
  registerModePerkuliahan = false;

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getPerkuliahan();
  }

  getPerkuliahan() {
    this.http.get(this.baseUrl + 'perkuliahan').subscribe(respose => {
      this.perkuliahans = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  registerToggle() {
    return this.registerModePerkuliahan = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerModePerkuliahan = registerMode;
  }

}
