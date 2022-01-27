import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInvestigacionPage } from './modal-investigacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInvestigacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInvestigacionPageRoutingModule {}
