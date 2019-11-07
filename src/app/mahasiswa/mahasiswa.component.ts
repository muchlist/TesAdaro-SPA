import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/';
  mahasiswas: any;
  mahasiswaIdClick: number;
  registerModeMahasiswa = false;
  detailModeMahasiswa = false;

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getMahasiswa();
  }

  getMahasiswa() {
    this.http.get(this.baseUrl + 'mahasiswa').subscribe(respose => {
      this.mahasiswas = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  registerToggle() {
    return this.registerModeMahasiswa = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerModeMahasiswa = registerMode;
  }

  detailToggle(mahasiswaId: number) {
    this.mahasiswaIdClick = mahasiswaId;
    return this.detailModeMahasiswa = true;
  }


  cancelDetailMode(registerMode: boolean) {
    this.detailModeMahasiswa = registerMode;
  }

}
