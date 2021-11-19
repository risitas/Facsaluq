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

      this.router.navigate(['/tableroMando/'+profile]);

    }).catch(err => Swal.fire({
      title: 'Error',
      html: '<img class="iconos" src="assets/icon/icono.png" alt=""><h1>Los datos ingresados son incorrectos.</h1>',
      confirmButtonText: 'Confirmar'
    }));
  }

  onLogout() {
    this.authService.logout();
  }
}
