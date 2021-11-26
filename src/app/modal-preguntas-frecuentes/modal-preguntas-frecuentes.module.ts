import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPreguntasFrecuentesPageRoutingModule } from './modal-preguntas-frecuentes-routing.module';

import { ModalPreguntasFrecuentesPage } from './modal-preguntas-frecuentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPreguntasFrecuentesPageRoutingModule
  ],
  declarations: [ModalPreguntasFrecuentesPage]
})
export class ModalPreguntasFrecuentesPageModule {}
