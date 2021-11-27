import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBienestarUniversitarioPage } from './modal-bienestar-universitario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBienestarUniversitarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBienestarUniversitarioPageRoutingModule {}
