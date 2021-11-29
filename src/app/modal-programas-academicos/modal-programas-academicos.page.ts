import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-modal-programas-academicos',
  templateUrl: './modal-programas-academicos.page.html',
  styleUrls: ['./modal-programas-academicos.page.scss'],
})
export class ModalProgramasAcademicosPage implements OnInit {

  public bibliotecacrai: string;
  public bibliotecafacultad: string;
  public contactocrai: string;
  public lines = [];

  constructor(private modalCtr: ModalController, public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {


    //________________________Leer los datos del documento de Lines y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');

    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);

    });

  }

  ngOnInit() {
  }

  onChangePre(opcion: string) {
    switch (opcion) {
      case "sst":
        window.location.href = this.lines[0].SST;
        break;

      case "gerontologia":
        window.location.href = this.lines[0].Gerontologia;
        break;

      case "enfermeria":
        window.location.href = this.lines[0].Enfermeria;
        break;

      case "medicina":
        window.location.href = this.lines[0].Medicina;
        break;
    }
  }

  onChangePost(opcion: string) {
    switch (opcion) {
      case "especializacionPediatria":
        window.location.href = this.lines[0].EspecializacionPediatra;
        break;

      case "maestriaRiesgosLaborales":
        window.location.href = this.lines[0].MaestriaRiesgosLaborales;
        break;

      case "maestriaCienciasBiomedicas":
        window.location.href = this.lines[0].MaestriaCienciasBiomedicas;
        break;

      case "doctoradoCienciasBiomedicas":
        window.location.href = this.lines[0].DoctoradoCienciasBiomedicas;
        break;

      default:
        break;
    }
  }

  async regresar() {
    const modal = await this.modalCtr.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

}
