import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';


@Component({
  selector: 'app-modal-servicios-academicos',
  templateUrl: './modal-servicios-academicos.page.html',
  styleUrls: ['./modal-servicios-academicos.page.scss'],
})
export class ModalServiciosAcademicosPage implements OnInit {


  public linksac: string;
  public lines = [];


  constructor(private modalCtr: ModalController, public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {


    //________________________Leer los datos y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');

    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);

      this.linksac = this.lines[0].SAC;
      console.log(this.lines[0].sac);


      //  this.nombres = usuarioActivo[0].nombres;
      //this.apellidos = usuarioActivo[0].apellidos;
      //this.email = usuarioActivo[0].correo;

    });
    //Para crear campos con id -> identificados. lo que está dentro del doc('01')
    //significa que su id será 01
    //  this.db.collection('Link').doc('Idlink').set({
    //  Asesorias: '',
    //      AulasVirtuales: '',
    //BancosImagenesLibres: '',
    //BibliotecaCrai: '',
    //BibliotecaFacultad: '',
    //BienestarUniversitario: '',
    //BolsadeEmpleo: '',
    //CLiL: '',
    //CSU: '',
    //CampusVirtual: '',
    //ContactoCrai: '',
    //Convocatorias: '',
    //Directorio: '',
    //DoctoradoCienciasBiomedicas: '',
    //Enfermeria: '',
    //EspecializacionPediatra: '',
    //Eventos: '',
    //Facebook: '',
    //Gerontologia: '',
    //GoogleMap: '',
    //GuiaDidactica: '',
    //KitparaMontajesCursos: '',
    //MaestriaCienciasBiomedicas: '',
    //MaestriaRiesgosLaborales: '',
    //Medicina: '',
    //Mosaicos: '',
    //Normativa: '',
    //PortalWebUQ: '',
    //ProyectodeExtension: '',
    //SAC: '',
    //SST: '',
    //Youtube: ''
    //})
    //      .then((a) => {
    //      console.log('Document successfully written!');
    //    })
    //.catch((error) => {
    //        console.error('Error writing document: ', error);
    //});


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
