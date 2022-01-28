import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';

const swal = require('sweetalert2');


@Component({
  selector: 'app-modal-extension',
  templateUrl: './modal-extension.page.html',
  styleUrls: ['./modal-extension.page.scss'],
})
export class ModalExtensionPage implements OnInit {

  public linkproyectosdeextension: string;
  public linkconvocatoria: string;
  public linkbolsadeempleo: string;
  public linkgpe: string;
  public linkasesoria: string;
  public linkemprendimiento: string;
  public linkgraduados: string;
  public linkintercambios: string;
  public linkeventos: string;
  public linkconvenios: string;
  public contactoExtension: string;
  public lines = [];

  constructor(private modalCtr: ModalController, public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {


    //________________________Leer los datos del documento de Lines y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');

    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);

      this.linkproyectosdeextension = this.lines[0].ProyectodeExtension;
      this.linkconvocatoria = this.lines[0].Convocatorias;
      this.linkbolsadeempleo = this.lines[0].BolsadeEmpleo;
      this.linkgpe = this.lines[0].Gpe;
      this.linkasesoria = this.lines[0].AsesoriaProyectos;
      this.linkemprendimiento = this.lines[0].Emprendimiento;
      this.linkgraduados = this.lines[0].Graduados;
      this.linkintercambios = this.lines[0].Intercambios;
      this.linkeventos = this.lines[0].EventosExtension;
      this.linkconvenios = this.lines[0].Convenios;
      this.contactoExtension = this.lines[0].ContactoExtension;


    });

  }

  ngOnInit() {
  }

  mostarEducate(){
    Swal.fire({
      html: '<img class="imagenSwal" src="assets/icon/mascota.png" alt=""><h1 class="text"></h1>En este espacio Uniquindiano como población general tendrán la oportunidad de interactuar con profesores y estudiantes de los cuatro programas de pregrado de la factultad, hacer sus preguntas sobre salud (Medicina, Enfermeria, Gerontologia y seguridad -salud en el trabajo), asi como también acceder a videos educativos que le van a servir para mejorar sus conocimientos y cuidado en salud.</h1>',
      confirmButtonText: 'Confirmar'
    })
  }

  async regresar() {
    const modal = await this.modalCtr.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

}
