import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalExtensionPage } from './modal-extension.page';

const routes: Routes = [
  {
    path: '',
    component: ModalExtensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalExtensionPageRoutingModule {}
