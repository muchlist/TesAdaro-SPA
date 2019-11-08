import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-detail-mahasiswa',
  templateUrl: './detail-mahasiswa.component.html',
  styleUrls: ['./detail-mahasiswa.component.css']
})
export class DetailMahasiswaComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/';
  @Input() idFromMahasiswa: any;
  @Output() cancelRegister = new EventEmitter();
  @Output() updateMahasiswa = new EventEmitter();
  model: any = {};
  modelperkuliahan: any = {};

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getDetailMahasiswa();
    this.getperkuliahanMahasiswa();
  }

  getDetailMahasiswa() {
    this.http.get(this.baseUrl + 'mahasiswa/' + this.idFromMahasiswa).subscribe(respose => {
      this.model = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  getperkuliahanMahasiswa() {
    this.http.get(this.baseUrl + 'perkuliahan/mhs/' + this.idFromMahasiswa).subscribe(respose => {
      this.modelperkuliahan = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }


  cancel() {
    this.cancelRegister.emit(false);
  }
}
