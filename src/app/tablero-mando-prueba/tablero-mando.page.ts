import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import Swal from 'sweetalert2';
import { ModalController } from '@ionic/angular';
import { ModalServiciosAcademicosPage } from '../modal-servicios-academicos/modal-servicios-academicos.page';
import { ModalProgramasAcademicosPage } from '../modal-programas-academicos/modal-programas-academicos.page';

const swal = require('sweetalert2');

@Component({
  selector: 'app-tablero-mando',
  templateUrl: './tablero-mando.page.html',
  styleUrls: ['./tablero-mando.page.scss'],
})
export class TableroMandoPage implements OnInit {

  modalDataResponse: any;

  profile: string;

  constructor(public modalCtrl: ModalController, public authservice: AuthService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.profile = this.activatedRoute.snapshot.paramMap.get("profile")

  }

  async mostarServiciosAcademicos(){
    const modal = await this.modalCtrl.create({
      component: ModalServiciosAcademicosPage,
      componentProps: {
        'name': 'The Winter Soldier'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });

    return await modal.present();
  }

  async mostarProgramasAcademicos(){
    const modal = await this.modalCtrl.create({
      component: ModalProgramasAcademicosPage
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });

    return await modal.present();
  }
  

  onLogout() {
    this.authservice.logout();
  }
}
