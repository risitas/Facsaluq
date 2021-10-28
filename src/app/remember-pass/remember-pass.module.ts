import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RememberPassPageRoutingModule } from './remember-pass-routing.module';

import { RememberPassPage } from './remember-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RememberPassPageRoutingModule
  ],
  declarations: [RememberPassPage]
})
export class RememberPassPageModule {}
