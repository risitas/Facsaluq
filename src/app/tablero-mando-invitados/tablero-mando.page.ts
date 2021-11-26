import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
//import * as $ from 'jquery';

@Component({
  selector: 'app-tablero-mando',
  templateUrl: './tablero-mando.page.html',
  styleUrls: ['./tablero-mando.page.scss'],
})
export class TableroMandoPage implements OnInit {

  profile: string;

  constructor(public authservice: AuthService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.profile = this.activatedRoute.snapshot.paramMap.get("profile")

  }


  onLogout() {
    this.authservice.logout();
  }
}
