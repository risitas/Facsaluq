import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const swal = require('sweetalert2')


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

    if (validacion === true) {
      if (this.password === this.reppassword) {
        this.auth.register(this.email, this.password, this.nombres, this.apellidos).then(auth => {
          
          let profile:String;
          let docenteAdministrativo= new RegExp (/\w+@uniquindio\.edu\.co/,'i');
          let estudiante= new RegExp (/\w+@uqvirtual\.edu\.co/,'i');
          if(docenteAdministrativo.test(this.email)===true){
            profile="1"; //Docente/Administrativo
          }else if(estudiante.test(this.email)===true){
            profile="2"; //Estudiante
          }else{
            profile="3"; //Invitado
          }

          switch (profile) {
            case "1":
              this.router.navigate(['/tableroMandoDocentes-Administrativos/'+profile]);
              break;
            case "2":
              this.router.navigate(['/tableroMandoEstudiantes/'+profile]);
              break;
            case "3":
              this.router.navigate(['/tableroMandoInvitados/'+profile]);
              break;
            default:
              break;
          }
          Swal.fire({
            title: '¡Registro completado!',
            html: '<img class="imagenSwal" src="assets/icon/3.registro.png" alt=""><h1 class="text"></h1>El registro se realizó correctamente.</h1>',
            confirmButtonText: 'Confirmar'
          })

        }).catch(err => {
          if (err.code === "auth/invalid-email") {
            Swal.fire({
              title: '¡Formato invalido!',
              html: '<img class="imagenSwal" src="assets/icon/2.Error.png" alt=""><h1 class="text">El correo tiene un formato invalido.</h1>',
              confirmButtonText: 'Confirmar'
            })
          } else if (err.code === "auth/weak-password") {
            Swal.fire({
              title: '¡Contraseña invalida!',
              html: '<img class="imagenSwal" src="assets/icon/2.Error.png" alt=""><h1 class="text">La contraseña debe tener minimo 6 caracteres.</h1>',
              confirmButtonText: 'Confirmar'
            })
          } else if (err.code === "auth/email-already-in-use") {
            Swal.fire({
              title: '¡Correo invalido!',
              html: '<img class="imagenSwal" src="assets/icon/2.Error.png" alt=""><h1 class="text">Ya se encuentra un usuario registrado con el correo electrónico ingresado.</h1>',
              confirmButtonText: 'Confirmar'
            })
          }
        });

      } else {
        Swal.fire({
          title: '¡Verificacion de contraseña fallido!',
          html: '<img class="imagenSwal" src="assets/icon/2.Error.png" alt=""><h1 class="text">Las contraseñas no coinciden.</h1>',
          confirmButtonText: 'Confirmar'
        })
      }
    } else {

      Swal.fire({
        title: '¡Faltan campos por diligenciar!',
        html: '<img class="imagenSwal" src="assets/icon/2.Error.png" alt=""><h1 class="text">Debe diligenciar todos los campos para poder registrarse.</h1>',
        confirmButtonText: 'Confirmar'
      })
    }
  }

  validarCampos(nombres, apellidos, email, password, reppassword) {
    let validacion = false;
    if (typeof (this.nombres) !== 'undefined' && typeof (this.apellidos) !== 'undefined' && typeof (this.email) != 'undefined' && typeof (this.password) !== 'undefined' && typeof (this.reppassword) !== 'undefined') {
      if (this.nombres !== '' && this.apellidos !== '' && this.email != '' && this.password !== '' && this.reppassword !== '') {
        validacion = true;
      }
    }
    return validacion;
  }
}
