import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableroMandoAdminPage } from './tablero-mando-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TableroMandoAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableroMandoAdminPageRoutingModule {}
