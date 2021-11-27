import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEdulabPageRoutingModule } from './modal-edulab-routing.module';

import { ModalEdulabPage } from './modal-edulab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEdulabPageRoutingModule
  ],
  declarations: [ModalEdulabPage]
})
export class ModalEdulabPageModule {}
