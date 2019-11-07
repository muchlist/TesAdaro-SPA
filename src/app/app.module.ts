import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { NavComponent } from './nav/nav.component';
import { RegisService } from './_services/regis.service';
import { RegisterMahasiswaComponent } from './register-mahasiswa/register-mahasiswa.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { DosenComponent } from './dosen/dosen.component';
import { RegisterDosenComponent } from './register-dosen/register-dosen.component';
import { MataKuliahComponent } from './mata-kuliah/mata-kuliah.component';
import { RegisterMataKuliahComponent } from './register-mata-kuliah/register-mata-kuliah.component';
import { PerkuliahanComponent } from './perkuliahan/perkuliahan.component';
import { RegisterPerkuliahanComponent } from './register-perkuliahan/register-perkuliahan.component';
import { DetailMahasiswaComponent } from './detail-mahasiswa/detail-mahasiswa.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      MahasiswaComponent,
      NavComponent,
      RegisterMahasiswaComponent,
      DosenComponent,
      RegisterDosenComponent,
      MataKuliahComponent,
      RegisterMataKuliahComponent,
      PerkuliahanComponent,
      RegisterPerkuliahanComponent,
      DetailMahasiswaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      Ng2SearchPipeModule,
      NgxPaginationModule,
      BsDatepickerModule.forRoot(),
      BrowserAnimationsModule
   ],
   providers: [
      RegisService,
      AlertifyService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
