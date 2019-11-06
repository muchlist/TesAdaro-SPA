import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { NavComponent } from './nav/nav.component';
import { RegisService } from './_services/regis.service';
import { RegisterMahasiswaComponent } from './register-mahasiswa/register-mahasiswa.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      MahasiswaComponent,
      NavComponent,
      RegisterMahasiswaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      RegisService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
