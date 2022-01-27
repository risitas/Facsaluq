import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-modal-servicios-academicos',
  templateUrl: './modal-servicios-academicos.page.html',
  styleUrls: ['./modal-servicios-academicos.page.scss'],
})
export class ModalServiciosAcademicosPage implements OnInit {


  public linksac: string;
  public linkcsu: string;
  public linkaulavirtual: string;
  public linkcampusvirtual: string;
  public lines = [];


  constructor(private modalCtr: ModalController, public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {


    //________________________Leer los datos del documento de Lines y cargarlos__________
    let docRef = this.db.collection('Link').doc('Idlink');

    docRef.get().toPromise().then((doc) => {

      const dts: any = doc.data();
      this.lines.push(dts);

      this.linksac = this.lines[0].SAC;
      this.linkcsu = this.lines[0].CSU;
      this.linkaulavirtual = this.lines[0].AulasVirtuales;
      this.linkcampusvirtual = this.lines[0].CampusVirtual;

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
