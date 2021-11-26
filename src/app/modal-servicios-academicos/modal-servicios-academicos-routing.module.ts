import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalServiciosAcademicosPage } from './modal-servicios-academicos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalServiciosAcademicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalServiciosAcademicosPageRoutingModule {}
