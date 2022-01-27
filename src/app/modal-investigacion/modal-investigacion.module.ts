import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInvestigacionPageRoutingModule } from './modal-investigacion-routing.module';

import { ModalInvestigacionPage } from './modal-investigacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInvestigacionPageRoutingModule
  ],
  declarations: [ModalInvestigacionPage]
})
export class ModalInvestigacionPageModule {}
