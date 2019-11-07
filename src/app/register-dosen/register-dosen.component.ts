import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisService } from '../_services/regis.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register-dosen',
  templateUrl: './register-dosen.component.html',
  styleUrls: ['./register-dosen.component.css']
})
export class RegisterDosenComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @Output() updateDosen = new EventEmitter();
  model: any = {};

  constructor(private regisService: RegisService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.regisService.registerDosen(this.model).subscribe(() => {
      this.alertify.success('Dosen Ditambahkan');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.updateDosen.emit();
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
