import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD:src/app/registro/registro.module.ts
import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
=======
import { TableroMandoPageRoutingModule } from './tablero-mando-routing.module';

import { TableroMandoPage } from './tablero-mando.page';
>>>>>>> master:src/app/tablero-mando/tablero-mando.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:src/app/registro/registro.module.ts
    RegistroPageRoutingModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
=======
    TableroMandoPageRoutingModule
  ],
  declarations: [TableroMandoPage]
})
export class TableroMandoPageModule {}
>>>>>>> master:src/app/tablero-mando/tablero-mando.module.ts
