import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLinkPage } from './update-link.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLinkPageRoutingModule {}
