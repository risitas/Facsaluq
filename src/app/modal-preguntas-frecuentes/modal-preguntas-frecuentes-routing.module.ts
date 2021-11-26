import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPreguntasFrecuentesPage } from './modal-preguntas-frecuentes.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPreguntasFrecuentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPreguntasFrecuentesPageRoutingModule {}
