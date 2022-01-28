import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-modal-investigacion',
  templateUrl: './modal-investigacion.page.html',
  styleUrls: ['./modal-investigacion.page.scss'],
})
export class ModalInvestigacionPage implements OnInit {

  public bibliotecacrai: string;
  public bibliotecafacultad: string;
  public contactocrai: string;
  public linkconvocatorias: string;
  public linksemilleros: string;
  public linkredesInvestigacion: string;
  public linkvicerrectoriaInvestigacion: string;
  public linkminCiencia: string;
  public lines = [];

  constructor(private modalCtr: ModalController, public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {


    //________________________Leer los datos del documento de Lines y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');

    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);
      this.linkconvocatorias = this.lines[0].Convocatorias;
      this.linksemilleros = this.lines[0].Semilleros;
      this.linkredesInvestigacion = this.lines[0].RedesInvestigacion;
      this.linkvicerrectoriaInvestigacion = this.lines[0].VicerrectoriaInvestigacion;
      this.linkminCiencia = this.lines[0].MinCiencia;
    });

  }

  ngOnInit() {
  }

  onChangeCentroInvestigacion(opcion: string) {
    switch (opcion) {
      case "centroInvestigacion":
        window.location.href = this.lines[0].centroInvestigacion;
        break;
    }
  }

  onChangeGruposInvestigacion(opcion: string) {
    switch (opcion) {
      case "GRIEEQ":
        window.location.href = this.lines[0].GRIEEQ;
        break;

      case "GIAP":
        window.location.href = this.lines[0].GIAP;
        break;

      case "GEPAMOL":
        window.location.href = this.lines[0].GEPAMOL;
        break;

      case "GYMOL":
        window.location.href = this.lines[0].GYMOL;
        break;

      case "GECAVYME":
        window.location.href = this.lines[0].GECAVYME;
        break;

      case "SaludPublica":
        window.location.href = this.lines[0].SaludPublica;
        break;

      case "Biomicromol":
        window.location.href = this.lines[0].Biomicromol;
        break;

      case "InvestigacionClinica":
        window.location.href = this.lines[0].InvestigacionClinica;
        break;

      case "GIPRL":
        window.location.href = this.lines[0].GIPRL;
        break;

      case "GIEST":
        window.location.href = this.lines[0].GIEST;
        break;

      case "GID":
        window.location.href = this.lines[0].GID;
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
