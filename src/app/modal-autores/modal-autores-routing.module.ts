import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAutoresPage } from './modal-autores.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAutoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAutoresPageRoutingModule {}
