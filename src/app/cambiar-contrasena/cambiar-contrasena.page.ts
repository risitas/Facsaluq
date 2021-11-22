import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {

  public password: string;
  public newPassword: string;
  public newReppassword: string;
  public profile: string;
  public tableroMando: string;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.profile = this.activatedRoute.snapshot.paramMap.get("profile")
    this.tableroMando = "/tableroMando/"+this.profile  
  }

}
