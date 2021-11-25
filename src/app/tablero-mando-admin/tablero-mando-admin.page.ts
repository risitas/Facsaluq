import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ActivatedRoute } from '@angular/router';
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
