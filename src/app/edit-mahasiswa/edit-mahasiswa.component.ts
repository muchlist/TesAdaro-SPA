import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-edit-mahasiswa',
  templateUrl: './edit-mahasiswa.component.html',
  styleUrls: ['./edit-mahasiswa.component.css']
})
export class EditMahasiswaComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/';
  @Input() idFromMahasiswaToEdit: any;
  @Output() cancelEdit = new EventEmitter();
  @Output() updateMahasiswa = new EventEmitter();
  model: any = {};

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getDetailMahasiswa();
  }

  getDetailMahasiswa() {
    this.http.get(this.baseUrl + 'mahasiswa/' + this.idFromMahasiswaToEdit).subscribe(respose => {
      this.model = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  editMahasiswa() {
    this.http.put(this.baseUrl + 'mahasiswa/' + this.idFromMahasiswaToEdit ,this.model).subscribe(() => {
      this.alertify.success('Mahasiswa Dirubah');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.updateMahasiswa.emit();
      this.cancelEdit.emit(false);
    });
  }

  cancel() {
    this.cancelEdit.emit(false);
  }


}
