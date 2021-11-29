import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';


import Swal from 'sweetalert2';

const swal = require('sweetalert2');

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
      Swal.fire({
        title: '¡Correo enviado!',
        html: '<img class="imagenSwal" src="assets/icon/Personajes/3.registro.png" alt=""><h1 class="text">El envio del correo fue exítoso. Verifique su bandeja de entrada para restablecer su contraseña.</h1>',
        confirmButtonText: 'Confirmar'
      })

    } else {
      //Debe mostrar una notificación que el correo ingresado es incorrecto.
      Swal.fire({
        title: '¡Correo invalido!',
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">El correo electrónico que ingreso no coincide con su usuario.</h1>',
        confirmButtonText: 'Confirmar'
      });
      console.log(this.user.email, this.email);
    }


  }

}
