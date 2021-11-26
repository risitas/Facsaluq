import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableroMandoPage } from './tablero-mando.page';

const routes: Routes = [
  {
    path: '',
    component: TableroMandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableroMandoPageRoutingModule {}
