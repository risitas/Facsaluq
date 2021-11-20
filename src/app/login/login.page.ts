import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const swal = require('sweetalert2')


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.login(this.email, this.password).then(res => {

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
          this.router.navigate(['/tableroMandoDocentes-Administrativos']);
          break;
        case "2":
          this.router.navigate(['/tableroMandoEstudiantes']);
          break;
        case "3":
          this.router.navigate(['/tableroMandoInvitados']);
          break;
        default:
          break;
      }

    }).catch(err => Swal.fire({
      title: '¡Datos incorrectos!',
      html: '<img class="imagenSwal" src="assets/icon/2.Error.png" alt=""><h1 class="text">Los datos ingresados son incorrectos.</h1>',
      confirmButtonText: 'Confirmar'
    }));
  }

  onLogout() {
    this.authService.logout();
  }
}
