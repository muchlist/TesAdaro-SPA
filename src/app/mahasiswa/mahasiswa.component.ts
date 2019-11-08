import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/';

  // Filtering
  filter: any;
  p: any;

  mahasiswas: any;
  mahasiswaIdClick: number;
  registerModeMahasiswa = false;
  detailModeMahasiswa = false;
  editModeMahasiswa = false;

  // Confirm Box
  modalRef: BsModalRef;
  message: string;

  constructor(private http: HttpClient,
              private alertify: AlertifyService,
              private modalService: BsModalService) { }

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

  editToggle(mahasiswaId: number) {
    this.mahasiswaIdClick = mahasiswaId;
    return this.editModeMahasiswa = true;
  }


  cancelEditMode(registerMode: boolean) {
    this.editModeMahasiswa = registerMode;
  }

  setMahasiswaId(id: number) {
    this.mahasiswaIdClick = id;
  }

  deleteMahasiswa() {
    this.http.delete(this.baseUrl + 'mahasiswa/' + this.mahasiswaIdClick).subscribe(() => {
      this.alertify.success('Mahasiswa di hapus');
      this.getMahasiswa();
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  onSearchChange(searchValue: string) {
    if (searchValue === '') {
      this.getMahasiswa();
    }
    this.http.get(this.baseUrl + 'mahasiswa/search/' + searchValue).subscribe(respose => {
      this.mahasiswas = respose;
    }, error => {
    }
    );
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.deleteMahasiswa();
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
