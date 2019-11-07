import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisService } from '../_services/regis.service';
import { AlertifyService } from '../_services/alertify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-perkuliahan',
  templateUrl: './register-perkuliahan.component.html',
  styleUrls: ['./register-perkuliahan.component.css']
})
export class RegisterPerkuliahanComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/';
  @Output() cancelRegister = new EventEmitter();
  @Output() updatePerkuliahan = new EventEmitter();
  model: any = {};
  dosenModel: any;
  mahasiswaModel: any;
  mataKuliahModel: any;

  constructor(private http: HttpClient, private regisService: RegisService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getMahasiswa();
    this.getMataKuliah();
    this.getDosen();
  }

  register() {
    this.regisService.registerPerkuliahan(this.model).subscribe(() => {
      this.alertify.success('Perkuliahan Ditambahkan');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.updatePerkuliahan.emit();
    });
  }

  getMahasiswa() {
    this.http.get(this.baseUrl + 'mahasiswa').subscribe(respose => {
      this.mahasiswaModel = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  getMataKuliah() {
    this.http.get(this.baseUrl + 'matakuliah').subscribe(respose => {
      this.mataKuliahModel = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  getDosen() {
    this.http.get(this.baseUrl + 'dosen').subscribe(respose => {
      this.dosenModel = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }


}
