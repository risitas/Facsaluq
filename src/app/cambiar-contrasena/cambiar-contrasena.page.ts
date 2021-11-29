import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {

  public email: string;
  public profile: string;
  public tableroMando: string;

  public auth = getAuth();
  public user = this.auth.currentUser;

  constructor(public activatedRoute: ActivatedRoute, private afauth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.profile = this.activatedRoute.snapshot.paramMap.get('profile');
    this.tableroMando = '/tableroMando/' + this.profile;
  }

  onEnviarCorreo() {

    if (this.user.email === this.email) {
      console.log(this.user.email, this.email);
      this.afauth.sendPasswordResetEmail(this.email);
      this.router.navigate(['/login']);

      //Debe mostrar alerta que se le envio un correo para cambiar la contraseña y que en el momento que vuelva a ingresar, será con la nueva.


    } else {
      //Debe mostrar una notificación que el correo ingresado es incorrecto.
      console.log(this.user.email, this.email);
    }


  }

}
