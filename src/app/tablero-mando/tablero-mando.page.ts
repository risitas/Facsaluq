import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-tablero-mando',
  templateUrl: './tablero-mando.page.html',
  styleUrls: ['./tablero-mando.page.scss'],
})
export class TableroMandoPage implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }


  onLogout() {
    this.authservice.logout();
  }
}
