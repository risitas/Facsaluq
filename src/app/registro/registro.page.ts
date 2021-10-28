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
    this.auth.register(this.email, this.password, this.nombres, this.apellidos, this.reppassword).then(auth => {
      this.router.navigate(['/tableroMando']);
      console.log(auth);
    }).catch(err => console.log(err));
  }
}
