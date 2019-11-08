import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-mata-kuliah',
  templateUrl: './mata-kuliah.component.html',
  styleUrls: ['./mata-kuliah.component.css']
})
export class MataKuliahComponent implements OnInit {
  // Filtering
  filter: any;
  p: any;

  baseUrl = 'http://localhost:5000/api/';
  matkuls: any;
  registerModeMatkul = false;

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getMataKuliah();
  }

  getMataKuliah() {
    this.http.get(this.baseUrl + 'matakuliah').subscribe(respose => {
      this.matkuls = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  deleteMatkul(id: any) {
    return this.http.delete(this.baseUrl + 'matakuliah/' + id).subscribe(() => {
      this.alertify.error('MataKuliah Dihapus');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.getMataKuliah();
    });
  }

  registerToggle() {
    return this.registerModeMatkul = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerModeMatkul = registerMode;
  }

}
