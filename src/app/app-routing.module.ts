import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { PerkuliahanComponent } from './perkuliahan/perkuliahan.component';
import { MataKuliahComponent } from './mata-kuliah/mata-kuliah.component';
import { DosenComponent } from './dosen/dosen.component';


const routes: Routes = [
  {path: 'mahasiswa', component: MahasiswaComponent},
  {path: 'dosen', component: DosenComponent},
  {path: 'mata-kuliah', component: MataKuliahComponent},
  {path: 'perkuliahan', component: PerkuliahanComponent},
  {path: '**', redirectTo: 'mahasiswa', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
