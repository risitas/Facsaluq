import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEdulabPage } from './modal-edulab.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEdulabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEdulabPageRoutingModule {}
