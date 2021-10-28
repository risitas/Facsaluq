import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';



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
        this.router.navigate(['/tableroMando']);
      }).catch(err => {
            if(err.code==="auth/invalid-email"){
              alert("El correo tiene un formato invalido.")
            }else if(err.code==="auth/weak-password"){
              alert("La contraseña debe tener minimo 6 caracteres.")
            }else if(err.code==="auth/email-already-in-use"){
              alert("Ya se encuentra un usuario registrado con ese correo.")
            }
        });
    }else{
      alert("Las constraseñas no coinciden")
    }
  }
}
