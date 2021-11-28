import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBibliotecaPage } from './modal-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBibliotecaPageRoutingModule {}
