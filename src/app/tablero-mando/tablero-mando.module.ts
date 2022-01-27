import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableroMandoPageRoutingModule } from './tablero-mando-routing.module';

import { TableroMandoPage } from './tablero-mando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableroMandoPageRoutingModule
  ],
  declarations: [TableroMandoPage]
})
export class TableroMandoPageModule {}
