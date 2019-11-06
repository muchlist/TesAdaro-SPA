import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/';
  mahasiswas: any;
  registerModeMahasiswa = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMahasiswa();
  }

  getMahasiswa() {
    this.http.get(this.baseUrl + 'mahasiswa').subscribe(respose => {
      this.mahasiswas = respose;
    }, error => {
      console.log(error);
    }
    );
  }

  registerToggle() {
    return this.registerModeMahasiswa = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerModeMahasiswa = registerMode;
  }

}
