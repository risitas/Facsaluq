import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBienestarUniversitarioPageRoutingModule } from './modal-bienestar-universitario-routing.module';

import { ModalBienestarUniversitarioPage } from './modal-bienestar-universitario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBienestarUniversitarioPageRoutingModule
  ],
  declarations: [ModalBienestarUniversitarioPage]
})
export class ModalBienestarUniversitarioPageModule {}
