import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisService } from '../_services/regis.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register-mata-kuliah',
  templateUrl: './register-mata-kuliah.component.html',
  styleUrls: ['./register-mata-kuliah.component.css']
})
export class RegisterMataKuliahComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @Output() updateMatkul = new EventEmitter();
  model: any = {};

  constructor(private regisService: RegisService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.regisService.registerMataKuliah(this.model).subscribe(() => {
      this.alertify.success('Dosen Ditambahkan');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.updateMatkul.emit();
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
