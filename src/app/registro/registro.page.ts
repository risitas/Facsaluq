import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const swal = require('sweetalert2');

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public nombres: string;
  public apellidos: string;
  public email: string;
  public password: string;
  public reppassword: string;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }



  onSubmitRegister() {
    
    let validacion = this.validarCampos(this.nombres, this.apellidos, this.email, this.password, this.reppassword);

    if (validacion[0] === true) {
      if (this.password === this.reppassword) {
        this.auth.register(this.email, this.password, this.nombres, this.apellidos).then(auth => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/5.RegistroExitoso.png" alt=""><h1 class="text"></h1>El registro se realizó correctamente.</h1>',
            confirmButtonText: 'Confirmar'
          })
          this.router.navigate(['/tableroMando/']);
        }).catch(err => {
          if (err.code === 'auth/invalid-email') {
            Swal.fire({
              html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">El correo tiene un formato invalido.</h1>',
              confirmButtonText: 'Confirmar'
            });
          } else if (err.code === 'auth/weak-password') {
            Swal.fire({
              html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">La contraseña debe tener minimo 6 caracteres.</h1>',
              confirmButtonText: 'Confirmar'
            });
          } else if (err.code === 'auth/email-already-in-use') {
            Swal.fire({
              html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">Ya se encuentra un usuario registrado con el correo electrónico ingresado.</h1>',
              confirmButtonText: 'Confirmar'
            });
          }
        });

      } else {
        Swal.fire({
          html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">Las contraseñas no coinciden.</h1>',
          confirmButtonText: 'Confirmar'
        });
      }
    } else {

      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""/><h1 class="text">Debe diligenciar todos los campos para poder registrarse.</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  validarCampos(nombres, apellidos, email, password, reppassword) {
    
    let validacion: boolean[] =[false,true,true];
    if (typeof (this.nombres) !== 'undefined' && typeof (this.apellidos) !== 'undefined' && typeof (this.email) != 'undefined' && typeof (this.password) !== 'undefined' && typeof (this.reppassword) !== 'undefined') {
      if (this.nombres !== '' && this.apellidos !== '' && this.email !== '' && this.password !== '' && this.reppassword !== '') {
        validacion[0] = true;
      }
    }
    let verificacionNombresApellidos= new RegExp (/\[a-zA-ZñÑ ]\./,'i');
    if(verificacionNombresApellidos.test(this.nombres)===false){
      validacion[1] = false;
    }

    if(verificacionNombresApellidos.test(this.apellidos)===false){
      console.log("Entre apellido")
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">Los apellidos solo deben contener letras.</h1>',
        confirmButtonText: 'Confirmar'
      });;
      validacion[2] = false;
    }
    return validacion;
  }
}
