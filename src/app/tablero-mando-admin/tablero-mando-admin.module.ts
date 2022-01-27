import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableroMandoAdminPageRoutingModule } from './tablero-mando-admin-routing.module';

import { TableroMandoAdminPage } from './tablero-mando-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableroMandoAdminPageRoutingModule
  ],
  declarations: [TableroMandoAdminPage]
})
export class TableroMandoAdminPageModule {}
