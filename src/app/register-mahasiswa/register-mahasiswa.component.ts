import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisService } from '../_services/regis.service';

@Component({
  selector: 'app-register-mahasiswa',
  templateUrl: './register-mahasiswa.component.html',
  styleUrls: ['./register-mahasiswa.component.css']
})
export class RegisterMahasiswaComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private regisService: RegisService) { }

  ngOnInit() {
  }

  register() {
    this.regisService.registerMahasiswa(this.model).subscribe(() => {
      console.log('success');
    }, error => {
      console.log('error');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('batal');
  }

}
