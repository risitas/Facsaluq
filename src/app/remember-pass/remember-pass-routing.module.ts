import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RememberPassPage } from './remember-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RememberPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RememberPassPageRoutingModule {}
