import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-dosen',
  templateUrl: './dosen.component.html',
  styleUrls: ['./dosen.component.css']
})
export class DosenComponent implements OnInit {

  baseUrl = 'http://localhost:5000/api/';
  // Filtering
  filter: any;
  p: any;

  dosens: any;
  registerModeDosen = false;

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getDosen();
  }

  getDosen() {
    this.http.get(this.baseUrl + 'dosen').subscribe(respose => {
      this.dosens = respose;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  registerToggle() {
    return this.registerModeDosen = true;
  }

  deleteDosen(id: any) {
    return this.http.delete(this.baseUrl + 'dosen/' + id).subscribe(() => {
      this.alertify.error('Dosen Dihapus');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.getDosen();
    });
  }


  cancelRegisterMode(registerMode: boolean) {
    this.registerModeDosen = registerMode;
  }
}
