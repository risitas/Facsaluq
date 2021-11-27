import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-tablero-mando-admin',
  templateUrl: './tablero-mando-admin.page.html',
  styleUrls: ['./tablero-mando-admin.page.scss'],
})
export class TableroMandoAdminPage implements OnInit {

  constructor(public authservice: AuthService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onLogout() {
    this.authservice.logout();
  }

}
