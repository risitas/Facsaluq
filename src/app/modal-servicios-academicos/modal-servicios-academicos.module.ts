import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalServiciosAcademicosPageRoutingModule } from './modal-servicios-academicos-routing.module';

import { ModalServiciosAcademicosPage } from './modal-servicios-academicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalServiciosAcademicosPageRoutingModule
  ],
  declarations: [ModalServiciosAcademicosPage]
})
export class ModalServiciosAcademicosPageModule {}
