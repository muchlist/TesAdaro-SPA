import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RegisService } from '../_services/regis.service';
import { AlertifyService } from '../_services/alertify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-perkuliahan',
  templateUrl: './edit-perkuliahan.component.html',
  styleUrls: ['./edit-perkuliahan.component.css']
})
export class EditPerkuliahanComponent implements OnInit {

  baseUrl = 'http://localhost:5000/api/';
  @Input() idFromPerkuliahanForEdit: any;
  @Output() cancelEdit = new EventEmitter();
  @Output() updatePerkuliahan = new EventEmitter();
  model: any = {};
  dosenModel: any;
  mahasiswaModel: any;
  mataKuliahModel: any;

  constructor(private http: HttpClient, private regisService: RegisService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getPerkuliahan();
    this.getMahasiswa();
    this.getMataKuliah();
    this.getDosen();
  }

  getPerkuliahan() {
    this.http.get(this.baseUrl + 'perkuliahan/' + this.idFromPerkuliahanForEdit).subscribe(respose => {
      this.model = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  editPerkuliahan() {
    this.http.put(this.baseUrl + 'perkuliahan/' + this.idFromPerkuliahanForEdit, this.model).subscribe(() => {
      this.alertify.success('Perkuliahan Dirubah');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.updatePerkuliahan.emit();
      this.cancelEdit.emit(false);
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
    this.cancelEdit.emit(false);
  }

}
