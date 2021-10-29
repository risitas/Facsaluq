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

    if(this.password===this.reppassword)
    {
      this.auth.register(this.email, this.password, this.nombres, this.apellidos).then(auth => {
        Swal.fire({
          title: '¡Registro completado!',
          text: 'El registro se realizó correctamente.',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        })
        this.router.navigate(['/tableroMando']);
      }).catch(err => {
            if(err.code==="auth/invalid-email"){
              Swal.fire({
                title: 'Error!',
                text: 'El correo tiene un formato invalido.',
                icon: 'error',
                confirmButtonText: 'Confirmar'
              })
            }else if(err.code==="auth/weak-password"){
              Swal.fire({
                title: 'Error!',
                text: 'La contraseña debe tener minimo 6 caracteres.',
                icon: 'error',
                confirmButtonText: 'Confirmar'
              })
            }else if(err.code==="auth/email-already-in-use"){
              Swal.fire({
                title: 'Error!',
                text: 'Ya se encuentra un usuario registrado con el correo electrónico ingresado.',
                icon: 'error',
                confirmButtonText: 'Confirmar'
              })
            }
        });
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden.',
        icon: 'error',
        confirmButtonText: 'Confirmar'
      })
    }
  }
}
