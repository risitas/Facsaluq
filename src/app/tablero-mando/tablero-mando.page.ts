import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { ModalController } from '@ionic/angular';
import { ModalServiciosAcademicosPage } from '../modal-servicios-academicos/modal-servicios-academicos.page';
import { ModalProgramasAcademicosPage } from '../modal-programas-academicos/modal-programas-academicos.page';
import { ModalBibliotecaPage } from '../modal-biblioteca/modal-biblioteca.page';
import { ModalEdulabPage } from '../modal-edulab/modal-edulab.page';
import { ModalExtensionPage } from '../modal-extension/modal-extension.page';
import { ModalRedesSocialesPage } from '../modal-redes-sociales/modal-redes-sociales.page';
import { ModalAutoresPage } from '../modal-autores/modal-autores.page';


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';

const swal = require('sweetalert2');

@Component({
  selector: 'app-tablero-mando',
  templateUrl: './tablero-mando.page.html',
  styleUrls: ['./tablero-mando.page.scss'],
})
export class TableroMandoPage implements OnInit {

  modalDataResponse: any;

  profile: string;
  public linkbienestaruniversitario: string;
  public linknormativas: string;
  public linkcontactenos: string;
  public contador: string;
  public contadorU: string;
  public valor: number;
  public valorU: number = 1;
  public lines = [];

  constructor(public modalCtrl: ModalController, public authservice: AuthService, public activatedRoute: ActivatedRoute, private db: AngularFirestore) {

    //________________________Leer los datos del documento de Lines y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');


    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);

      this.valor = this.lines[0].Contador + 1;

      docRef.update({
        Contador: this.valor
      })

      this.contador = this.lines[0].Contador;
      this.linkcontactenos = this.lines[0].Contactenos;
      this.linkbienestaruniversitario = this.lines[0].BienestarUniversitario;
      this.linknormativas = this.lines[0].Normativa;

    });


    //Este es el método para sabaer el registro de usuarios que existe

    const lectura = this.db.collection('users').get().toPromise();
    lectura.then(res => {
      const document = res.docs;
      for (let object of document) {
        // la variable valor es la que esta publica así: public valor: number = 1;
        this.valorU++;

      }
      //Esta variable contador es la que se pone en el html
      this.contadorU = this.valorU + '';


    });

    
  }

  ngOnInit() {

    this.profile = this.activatedRoute.snapshot.paramMap.get("profile")

  }

  mostarProduccion(){
    Swal.fire({
      html: '<img class="imagenSwal" src="assets/icon/mascota.png" alt=""><h1 class="text"></h1>En este espacio Uniquindianos y población general podrán acceder a todas las producción propias bibliográficas de profesores y estudiantes que sirvan de consulta permanente.</h1>',
      confirmButtonText: 'Confirmar'
    })
  }

  async mostarServiciosAcademicos() {
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

  async mostarProgramasAcademicos() {
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

  async mostarBiblioteca() {
    const modal = await this.modalCtrl.create({
      component: ModalBibliotecaPage
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });

    return await modal.present();
  }

  async mostarEdulab() {
    const modal = await this.modalCtrl.create({
      component: ModalEdulabPage
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });

    return await modal.present();
  }

  async mostarExtension() {
    const modal = await this.modalCtrl.create({
      component: ModalExtensionPage
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });
    return await modal.present();
  }

  async mostarRedesSociales() {
    const modal = await this.modalCtrl.create({
      component: ModalRedesSocialesPage
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });

    return await modal.present();
  }

  async mostarAutores() {
    const modal = await this.modalCtrl.create({
      component: ModalAutoresPage
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
