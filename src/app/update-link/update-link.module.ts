import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLinkPageRoutingModule } from './update-link-routing.module';

import { UpdateLinkPage } from './update-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLinkPageRoutingModule
  ],
  declarations: [UpdateLinkPage]
})
export class UpdateLinkPageModule {}
