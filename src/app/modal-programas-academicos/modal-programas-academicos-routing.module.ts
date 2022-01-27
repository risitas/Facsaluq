import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalProgramasAcademicosPage } from './modal-programas-academicos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalProgramasAcademicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalProgramasAcademicosPageRoutingModule {}
