import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  registerMahasiswa(model: any) {
    return this.http.post(this.baseUrl + 'mahasiswa', model);
  }

  registerDosen(model: any) {
    return this.http.post(this.baseUrl + 'dosen', model);
  }

  registerMataKuliah(model: any) {
    return this.http.post(this.baseUrl + 'matakuliah', model);
  }

  registerPerkuliahan(model: any) {
    return this.http.post(this.baseUrl + 'perkuliahan', model);
  }
}
