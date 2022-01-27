import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-modal-biblioteca',
  templateUrl: './modal-biblioteca.page.html',
  styleUrls: ['./modal-biblioteca.page.scss'],
})
export class ModalBibliotecaPage implements OnInit {

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

      this.bibliotecacrai = this.lines[0].BibliotecaCrai;
      this.bibliotecafacultad = this.lines[0].BibliotecaFacultad;
      this.contactocrai = this.lines[0].ContactoCrai;
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
