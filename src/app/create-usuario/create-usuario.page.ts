import { Component, OnInit } from '@angular/core';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.page.html',
  styleUrls: ['./create-usuario.page.scss'],
})
export class CreateUsuarioPage implements OnInit {

  constructor(private reutilizarRegistro: RegistroPage) { }

  ngOnInit() {
  }


  onSubmitCreate() {
    this.reutilizarRegistro.onSubmitRegister();
  }


}
