import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-modal-redes-sociales',
  templateUrl: './modal-redes-sociales.page.html',
  styleUrls: ['./modal-redes-sociales.page.scss'],
})
export class ModalRedesSocialesPage implements OnInit {


  public linkyoutube: string;
  public linkfacebook: string;
  public linkgooglemap: string;
  public linkportalweb: string;
  public linkdirectorios: string;
  public linkeventos: string;
  public linkmosaicos: string;
  public lines = [];

  constructor(private modalCtr: ModalController, public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {


    //________________________Leer los datos del documento de Lines y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');

    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);

      this.linkyoutube = this.lines[0].Youtube;
      this.linkfacebook = this.lines[0].Facebook;
      this.linkgooglemap = this.lines[0].GoogleMap;
      this.linkportalweb = this.lines[0].PortalWebUQ;
      this.linkeventos = this.lines[0].Eventos;
      this.linkmosaicos = this.lines[0].Mosaicos;
    });

  }

  ngOnInit() {
  }

  async regresar() {
    const modal = await this.modalCtr.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

  onChangeDir(opcion: string) {
    switch (opcion) {
      case "enfermeria":
        window.location.href = this.lines[0].DirEnfemeria;
        break;

      case "medicina":
        window.location.href = this.lines[0].DirMedicina;
        break;

      case "dirGeneral":
        window.location.href = this.lines[0].DirGeneral;
        break;
    }
  }

}
