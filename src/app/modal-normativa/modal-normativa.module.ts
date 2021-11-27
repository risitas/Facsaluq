import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNormativaPageRoutingModule } from './modal-normativa-routing.module';

import { ModalNormativaPage } from './modal-normativa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNormativaPageRoutingModule
  ],
  declarations: [ModalNormativaPage]
})
export class ModalNormativaPageModule {}
