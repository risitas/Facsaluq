import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRedesSocialesPage } from './modal-redes-sociales.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRedesSocialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRedesSocialesPageRoutingModule {}
