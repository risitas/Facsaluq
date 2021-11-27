import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNormativaPage } from './modal-normativa.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNormativaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNormativaPageRoutingModule {}
