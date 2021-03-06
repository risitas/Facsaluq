import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const swal = require('sweetalert2');


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  profile: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }


  onSubmitLogin() {
    this.authService.login(this.email, this.password).then(res => {
      if (this.email == 'admin@facsaluq.com') {
        return this.router.navigate(['/tableroMandoAdmin']);
      } else {

        return this.router.navigate(['/tableroMando']);

      }

    }).catch(err => Swal.fire({
      html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">Los datos ingresados son incorrectos.</h1>',
      confirmButtonText: 'Confirmar'
    }));
  }

  onLogout() {
    this.authService.logout();
  }
}
