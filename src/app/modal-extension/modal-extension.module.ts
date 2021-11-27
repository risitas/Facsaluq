import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalExtensionPageRoutingModule } from './modal-extension-routing.module';

import { ModalExtensionPage } from './modal-extension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalExtensionPageRoutingModule
  ],
  declarations: [ModalExtensionPage]
})
export class ModalExtensionPageModule {}
