import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})

export class EditarUsuarioPage implements OnInit {

  public usuario: any;
  public nombres: string;
  public apellidos: string;
  public email: string;
  public password: string;
  public reppassword: string;
  public isReadOnly: boolean;
  public tableroMando: string;
  public botonEditar: string;
  public botonEliminar: string;
  public profile: string;
  public query: string;
  public auth = getAuth();
  public user = this.auth.currentUser;


  constructor(public activatedRoute: ActivatedRoute, private db: AngularFirestore, private afauth: AngularFireAuth, private router: Router) {
    //this.usuario = db.collection('users')


    const usuarioActivo = [];

    if (this.user) {
      //________________________Leer los datos y cargarlos__________
      let docRef = this.db.collection('users').doc(this.user.uid);

      docRef.get().toPromise().then((doc) => {

        const dts: any = doc.data();
        usuarioActivo.push(dts);
        this.nombres = usuarioActivo[0].nombres;
        this.apellidos = usuarioActivo[0].apellidos;
        this.email = usuarioActivo[0].correo;

        console.log('Document data:', this.nombres, this.apellidos, this.email);

      });

    }
  }

  ngOnInit() {
    this.profile = this.activatedRoute.snapshot.paramMap.get("profile")
    this.tableroMando = "/tableroMando/" + this.profile
    this.isReadOnly = true;
    this.botonEditar = "Editar";
    this.botonEliminar = "Eliminar";
  }

  onSubmitChangeUser() {

    //Debe mostrar alerta, por cada acción.
    //para que sepa cuando debe escribir y cuando ya se guardo los datos.

    //________//
    if (this.botonEditar === "Editar") {
      this.isReadOnly = false;
      this.botonEditar = "Guardar";

    } else if (this.botonEditar === "Guardar") {


      let actualizar = this.db.collection('users').doc(this.user.uid);
      actualizar.update({
        nombres: this.nombres,
        apellidos: this.apellidos,

      })
        .then(() => {

          console.log('Document successfully updated!', actualizar);
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error);
        });

      this.isReadOnly = true;
      this.botonEditar = "Editar";

    } else {
      this.isReadOnly = true;
      this.botonEditar = "Editar";
    }

  }

  onRemove() {
    //Eliminar un documento

    //debe mostrar una alerta que pregunte primero antes de hacerlo
    this.db.collection('users').doc(this.user.uid).delete().then(() => {

      this.user.delete().then(() => {

        this.afauth.signOut().then(() => {

          //debe mostrar una alerta que diga que fue eliminado con exito.
          this.router.navigate(['/login']);
        }).catch((error) => {
          console.error('Error removing document: ', error);
        });
      });
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
  }

  obtenerDato(id: string) {

    const cities = [];
    let docRef = this.db.collection('users').doc(id);

    docRef.get().toPromise().then((doc) => {
      if (doc.exists) {
        const dts: any = doc.data();
        cities.push(dts);
        console.log('Document data:', cities[0].correo);
      }

    });



  }

}
