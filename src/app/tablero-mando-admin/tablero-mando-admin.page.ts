import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';

const swal = require('sweetalert2');


@Component({
  selector: 'app-tablero-mando-admin',
  templateUrl: './tablero-mando-admin.page.html',
  styleUrls: ['./tablero-mando-admin.page.scss'],
})
export class TableroMandoAdminPage implements OnInit {

  public sac: string;
  public actualizar;
  constructor(public authservice: AuthService, public activatedRoute: ActivatedRoute, private db: AngularFirestore) {

    //________________________Leer los datos del documento de Lines y cargarlos__________
    this.actualizar = this.db.collection('Link').doc('Idlink');
  }

  ngOnInit() {
  }

  onLogout() {
    this.authservice.logout();
  }

  //----Actualizar enlaces----
  actualizarSac() {
    this.actualizar.update({
      SAC: this.sac
    })
      .then(() => {
        Swal.fire({
          title: 'Actualización exitosa!',
          html: '<img class="imagenSwal" src="assets/icon/Personajes/1.Login.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
          confirmButtonText: 'Confirmar'
        });
      });
  }

}
