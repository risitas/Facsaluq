import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-modal-extension',
  templateUrl: './modal-extension.page.html',
  styleUrls: ['./modal-extension.page.scss'],
})
export class ModalExtensionPage implements OnInit {

  public linkproyectosdeextension: string;
  public linkconvocatoria: string;
  public linkbolsadeempleo: string;
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

}
