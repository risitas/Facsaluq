import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalProgramasAcademicosPageRoutingModule } from './modal-programas-academicos-routing.module';

import { ModalProgramasAcademicosPage } from './modal-programas-academicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProgramasAcademicosPageRoutingModule
  ],
  declarations: [ModalProgramasAcademicosPage]
})
export class ModalProgramasAcademicosPageModule {}
