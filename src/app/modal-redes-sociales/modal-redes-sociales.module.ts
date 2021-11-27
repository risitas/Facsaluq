import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRedesSocialesPageRoutingModule } from './modal-redes-sociales-routing.module';

import { ModalRedesSocialesPage } from './modal-redes-sociales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRedesSocialesPageRoutingModule
  ],
  declarations: [ModalRedesSocialesPage]
})
export class ModalRedesSocialesPageModule {}
