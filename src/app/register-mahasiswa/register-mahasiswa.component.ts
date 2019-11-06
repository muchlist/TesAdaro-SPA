import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisService } from '../_services/regis.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register-mahasiswa',
  templateUrl: './register-mahasiswa.component.html',
  styleUrls: ['./register-mahasiswa.component.css']
})
export class RegisterMahasiswaComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private regisService: RegisService,private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.regisService.registerMahasiswa(this.model).subscribe(() => {
      this.alertify.success('Mahasiswa Ditambahkan');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('Batal');
  }

}
