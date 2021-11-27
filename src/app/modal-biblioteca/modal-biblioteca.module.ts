import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBibliotecaPageRoutingModule } from './modal-biblioteca-routing.module';

import { ModalBibliotecaPage } from './modal-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBibliotecaPageRoutingModule
  ],
  declarations: [ModalBibliotecaPage]
})
export class ModalBibliotecaPageModule {}
