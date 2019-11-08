import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-perkuliahan',
  templateUrl: './perkuliahan.component.html',
  styleUrls: ['./perkuliahan.component.css']
})
export class PerkuliahanComponent implements OnInit {

  baseUrl = 'http://localhost:5000/api/';
  perkuliahanIdClick: number;
  perkuliahans: any;
  registerModePerkuliahan = false;
  editModePerkuliahan = false;

  // Confirm Box
  modalRef: BsModalRef;
  message: string;

  constructor(private http: HttpClient, private alertify: AlertifyService, private modalService: BsModalService) { }

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

  editToggle(id: number) {
    this.perkuliahanIdClick = id;
    return this.editModePerkuliahan = true;
  }

  cancelEditMode(editMode: boolean) {
    this.editModePerkuliahan = editMode;
  }

  setPerkuliahanId(id: number) {
    this.perkuliahanIdClick = id;
  }

  deletePerkuliahan() {
    this.http.delete(this.baseUrl + 'perkuliahan/' + this.perkuliahanIdClick).subscribe(() => {
      this.alertify.success('Perkuliahan di hapus');
      this.getPerkuliahan();
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.deletePerkuliahan();
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
