import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-tablero-mando',
  templateUrl: './tablero-mando.page.html',
  styleUrls: ['./tablero-mando.page.scss'],
})
export class TableroMandoPage implements OnInit {

  perfil: string;

  constructor(public authservice: AuthService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.perfil = this.activatedRoute.snapshot.paramMap.get("perfil")
    this.ocultarElementos(this.perfil);

  }

  ocultarElementos(perfil){

    switch (perfil) {
      case "1":
        break;
      case "2":
      console.log("Entre")
        $("#sac").css("display","none")
        $("#csu").css("display","none")
        $("#aulas_virtuales").css("display","none")    
        break;
      case "3":

        break;
      default:
        break;
    }


  }

  onLogout() {
    this.authservice.logout();
  }
}
