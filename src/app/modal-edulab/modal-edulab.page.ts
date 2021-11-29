import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-modal-edulab',
  templateUrl: './modal-edulab.page.html',
  styleUrls: ['./modal-edulab.page.scss'],
})
export class ModalEdulabPage implements OnInit {

  public linkclil: string;
  public linkasesoria: string;
  public linkguiadidactica: string;
  public linkbancosimageneslibres: string;
  public linkkitparamontajecursos: string;
  public lines = [];

  constructor(private modalCtr: ModalController, public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {


    //________________________Leer los datos del documento de Lines y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');

    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);

      this.linkclil = this.lines[0].CLiL;
      this.linkasesoria = this.lines[0].Asesorias;
      this.linkguiadidactica = this.lines[0].GuiaDidactica;
      this.linkbancosimageneslibres = this.lines[0].BancosImagenesLibres;
      this.linkkitparamontajecursos = this.lines[0].KitparaMontajesCursos;

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
