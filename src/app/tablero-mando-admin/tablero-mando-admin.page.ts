import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';

const swal = require('sweetalert2');

@Component({
  selector: 'app-tablero-mando-admin',
  templateUrl: './tablero-mando-admin.page.html',
  styleUrls: ['./tablero-mando-admin.page.scss'],
})
export class TableroMandoAdminPage implements OnInit {

  public sac: string;
  public csu: string;
  public campusvirtual: string;
  public asesorias: string;
  public aulasvirtuales: string;
  public bancoimageneslibres: string;
  public bibliotecacrai: string;
  public bibliotecafacultad: string;
  public bienestaruniversitario: string;
  public bolsaempleo: string;
  public clil: string;
  public contactocrai: string;
  public convocatorias: string;
  public directorio: string;
  public doctoradocienciasbiomedicas: string;
  public enfermeria: string;
  public especializacionpediatra: string;
  public eventos: string;
  public facebook: string;
  public gerontologia: string;
  public googlemap: string;
  public guiadidactica: string;
  public kitparamontajescurso: string;
  public proyectotransformacionpedagogica: string;
  public maestriacienciasbiomedicas: string;
  public maestriariesgoslaborales: string;
  public medicina: string;
  public preMedico: string;
  public mosaico: string;
  public normativa: string;
  public portalwebuq: string;
  public proyectodeextension: string;
  public sst: string;
  public youtube: string;
  public contactenos: string;
  public dirEnfermeria: string;
  public dirMedicina: string;
  public dirGeneral: string;
  public actualizar;
  public contador: string;
  public valor: number;
  public lines = [];

  constructor(public authservice: AuthService, public activatedRoute: ActivatedRoute, private db: AngularFirestore) {

    //________________________Leer los datos del documento de Lines y cargarlos__________

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

    });




    this.actualizar = this.db.collection('Link').doc('Idlink');
  }

  ngOnInit() {
  }

  onLogout() {
    this.authservice.logout();
  }

  //----Actualizar enlaces----
  actualizarSac() {
    if (this.sac !== undefined) {
      this.actualizar.update({
        SAC: this.sac
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.sac = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar el link que desea actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarCSU() {
    if (this.csu !== undefined) {
      this.actualizar.update({
        CSU: this.csu
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.csu = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarCampusVirtual() {
    if (this.campusvirtual !== undefined) {
      this.actualizar.update({
        CampusVirtual: this.campusvirtual
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.campusvirtual = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarAsesorias() {
    if (this.asesorias !== undefined) {
      this.actualizar.update({
        Asesorias: this.asesorias
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.asesorias = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarAulasVirtuales() {

    if (this.aulasvirtuales !== undefined) {
      this.actualizar.update({
        AulasVirtuales: this.aulasvirtuales
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.aulasvirtuales = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarBancoImagenesLibres() {

    if (this.bancoimageneslibres !== undefined) {
      this.actualizar.update({
        BancosImagenesLibres: this.bancoimageneslibres
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.bancoimageneslibres = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarBibliotecaCrai() {

    if (this.bibliotecacrai !== undefined) {
      this.actualizar.update({
        BibliotecaCrai: this.bibliotecacrai
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.bibliotecacrai = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarBibliotecaFacultad() {

    if (this.bibliotecafacultad !== undefined) {
      this.actualizar.update({
        BibliotecaFacultad: this.bibliotecafacultad
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.bibliotecafacultad = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarBienestarUniversitario() {

    if (this.bienestaruniversitario !== undefined) {
      this.actualizar.update({
        BienestarUniversitario: this.bienestaruniversitario
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.bienestaruniversitario = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarBolsadeEmpleo() {

    if (this.bolsaempleo !== undefined) {
      this.actualizar.update({
        BolsadeEmpleo: this.bolsaempleo
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.bolsaempleo = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarCLiL() {

    if (this.clil !== undefined) {
      this.actualizar.update({
        CLiL: this.clil
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.clil = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarContactoCrai() {

    if (this.contactocrai !== undefined) {
      this.actualizar.update({
        ContactoCrai: this.contactocrai
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.contactocrai = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarConvocatorias() {

    if (this.convocatorias !== undefined) {
      this.actualizar.update({
        Convocatorias: this.convocatorias
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.convocatorias = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarDirectorio() {

    if (this.directorio !== undefined) {
      this.actualizar.update({
        Directorio: this.directorio
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.directorio = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarDoctoradoCienciasBiomedicas() {

    if (this.doctoradocienciasbiomedicas !== undefined) {
      this.actualizar.update({
        DoctoradoCienciasBiomedicas: this.doctoradocienciasbiomedicas
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.doctoradocienciasbiomedicas = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarEnfermeria() {

    if (this.enfermeria !== undefined) {
      this.actualizar.update({
        Enfermeria: this.enfermeria
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.enfermeria = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarPreMedico() {

    if (this.preMedico !== undefined) {
      this.actualizar.update({
        PreMedico: this.preMedico
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.preMedico = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarEspecializacionPediatra() {

    if (this.especializacionpediatra !== undefined) {
      this.actualizar.update({
        EspecializacionPediatra: this.especializacionpediatra
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.especializacionpediatra = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarEventos() {

    if (this.eventos !== undefined) {
      this.actualizar.update({
        Eventos: this.eventos
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.eventos = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarFacebook() {

    if (this.facebook !== undefined) {
      this.actualizar.update({
        Facebook: this.facebook
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.facebook = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarGerontologia() {

    if (this.gerontologia !== undefined) {
      this.actualizar.update({
        Gerontologia: this.gerontologia
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.gerontologia = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarGoogleMap() {

    if (this.googlemap !== undefined) {
      this.actualizar.update({
        GoogleMap: this.googlemap
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.googlemap = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarGuiaDidactica() {

    if (this.guiadidactica !== undefined) {
      this.actualizar.update({
        GuiaDidactica: this.guiadidactica
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.guiadidactica = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarKitparaMontajesCursos() {

    if (this.kitparamontajescurso !== undefined) {
      this.actualizar.update({
        KitparaMontajesCursos: this.kitparamontajescurso
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.kitparamontajescurso = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarproyectotransformacionpedagogica() {

    if (this.proyectotransformacionpedagogica !== undefined) {
      this.actualizar.update({
        ProyectoTransformaciónPedagogica: this.proyectotransformacionpedagogica
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.proyectotransformacionpedagogica = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarMaestriaCienciasBiomedicas() {

    if (this.maestriacienciasbiomedicas !== undefined) {
      this.actualizar.update({
        MaestriaCienciasBiomedicas: this.maestriacienciasbiomedicas
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.maestriacienciasbiomedicas = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarMaestriaRiesgosLaborales() {

    if (this.maestriariesgoslaborales !== undefined) {
      this.actualizar.update({
        MaestriaRiesgosLaborales: this.maestriariesgoslaborales
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.maestriariesgoslaborales = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarMedicina() {

    if (this.medicina !== undefined) {
      this.actualizar.update({
        Medicina: this.medicina
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.medicina = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarMosaicos() {

    if (this.mosaico !== undefined) {
      this.actualizar.update({
        Mosaicos: this.mosaico
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.mosaico = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarNormativa() {

    if (this.normativa !== undefined) {
      this.actualizar.update({
        Normativa: this.normativa
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.normativa = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarPortalWebUQ() {

    if (this.portalwebuq !== undefined) {
      this.actualizar.update({
        PortalWebUQ: this.portalwebuq
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.portalwebuq = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarProyectodeExtension() {

    if (this.proyectodeextension !== undefined) {
      this.actualizar.update({
        ProyectodeExtension: this.proyectodeextension
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.proyectodeextension = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarSST() {

    if (this.sst !== undefined) {
      this.actualizar.update({
        SST: this.sst
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.sst = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarYoutube() {

    if (this.youtube !== undefined) {
      this.actualizar.update({
        Youtube: this.youtube
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.youtube = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarContactenos() {

    if (this.contactenos !== undefined) {
      this.actualizar.update({
        Contactenos: this.contactenos
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.contactenos = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarDirGeneral() {

    if (this.dirGeneral !== undefined) {
      this.actualizar.update({
        DirGeneral: this.dirGeneral
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.contactenos = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarDirEnfermeria() {

    if (this.dirEnfermeria !== undefined) {
      this.actualizar.update({
        DirEnfermeria: this.dirEnfermeria
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.contactenos = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  actualizarDirMedicina() {

    if (this.dirMedicina !== undefined) {
      this.actualizar.update({
        DirMedicina: this.dirMedicina
      })
        .then(() => {
          Swal.fire({
            html: '<img class="imagenSwal" src="assets/icon/Personajes/transaccionExitosa.png" alt=""><h1 class="text"></h1>El enlace se actualizo correctamente</h1>',
            confirmButtonText: 'Confirmar'
          });
          this.contactenos = '';
        });
    } else {
      Swal.fire({
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text"></h1>Por favor ingresar un link para actualizar</h1>',
        confirmButtonText: 'Confirmar'
      });
    }
  }
}
