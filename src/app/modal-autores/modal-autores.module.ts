import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAutoresPageRoutingModule } from './modal-autores-routing.module';

import { ModalAutoresPage } from './modal-autores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAutoresPageRoutingModule
  ],
  declarations: [ModalAutoresPage]
})
export class ModalAutoresPageModule {}
