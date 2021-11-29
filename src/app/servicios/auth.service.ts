import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { promise } from 'protractor';
import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

const swal = require('sweetalert2');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuariosArreglo: any = [];
  public contador = 0;
  constructor(private afauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {

    if (email != null && password != null) {
      return new Promise((resolve, rejected) => {
        this.afauth.signInWithEmailAndPassword(email, password).then(user => {
          //console.log('Esta logueado: ' + user);
          resolve(user);
        }).catch(err => rejected(err));

      });
    } else {
      Swal.fire({
        title: '¡Faltan campos por diligenciar!',
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">Debe diligenciar todos los campos.</h1>',
        confirmButtonText: 'Confirmar'
      });
    }

  }
  logout() {
    this.afauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  remember() {
    this.afauth.signOut().then(() => {
      this.router.navigate(['/rememberPass']);
    });
  }

  register(email: string, password: string, name: string, lastname: string) {



    return new Promise((resolve, rejected) => {

      this.afauth.createUserWithEmailAndPassword(email, password).then(res => {

        const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
          id: uid,
          nombres: name,
          apellidos: lastname,
          correo: email,
          contrasena: password
        });

        resolve(res);
      }).catch(err => rejected(err));
    });
  }

  resetPassword(email: string) {

    if (email != null) {

      if (email.includes('@')) {

        const lectura = this.db.collection('users').get().toPromise();
        return lectura.then(res => {
          //   console.log(res.docs);
          const document = res.docs;
          for (let object of document) {


            const dts: any = object.data();

            //  console.log(dts.correo + 'aparte');
            this.usuariosArreglo.push(dts.correo);
          }

          // console.log(this.usuariosArreglo);

          for (let array of this.usuariosArreglo) {

            if (email === array && this.contador == 0) {
              Swal.fire({
                title: '¡Correo enviador!',
                html: '<img class="imagenSwal" src="assets/icon/Personajes/3.registro.png" alt=""><h1 class="text">El envio del correo fue exítoso. Verifique su bandeja de entrada para restablecer su contraseña.</h1>',
                confirmButtonText: 'Confirmar'
              })
              //console.log('hola');
              this.logout();
              this.contador = 1;
              return this.afauth.sendPasswordResetEmail(email);
            }
          }
          if (this.contador == 0) {
            Swal.fire({
              title: '¡Usuario no registrado!',
              html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">El correo ' + email + ' que acaba de ingresar no está registrado</h1>',
              confirmButtonText: 'Confirmar'
            });
            //console.log('Nohola');
            this.remember();
            this.contador = 0;
          }
        });
      } else {
        Swal.fire({
          title: '¡Correo invalido!',
          html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">Formato de correo invalido, por favor ingrese su correo.</h1>',
          confirmButtonText: 'Confirmar'
        });
      }
    } else {
      Swal.fire({
        title: '¡Campos sin diligenciar!',
        html: '<img class="imagenSwal" src="assets/icon/Personajes/2.Error.png" alt=""><h1 class="text">Por favor ingrese su correo electronico.</h1>',
        confirmButtonText: 'Confirmar'
      })
    }
  }


  //# Parte de la administración
  //Crud  de  usuario.

  // read(email: string) {

  //#Leer la lectura


  //  this.db.collection('pruebba').add({
  //  first: 'Yosimar',
  //middle: 'Naranjo',
  //last: 'Mancilla',
  //born: 1999
  //})
  //.then((docRef) => {
  //        console.log('Document written with ID: ', docRef.id);
  //    })
  //  .catch((error) => {
  //  console.error('Error adding document: ', error);
  //});

  //Para crear campos con id -> identificados. lo que está dentro del doc('01')
  //significa que su id será 01
  // this.db.collection('pruebba').doc('01').set({
  // born: 1998,
  //first: 'CA',
  //last: 'USA',
  //middle: 'Hola'
  //})
  //      .then((a) => {
  //      console.log('Document successfully written!');
  //  })
  //      .catch((error) => {
  //      console.error('Error writing document: ', error);
  //  });

  //Actualizar, se pone la colección y el id del documento a actualizar, luego se ponen los campos a actualizar.
  // let actualizar = this.db.collection('pruebba').doc('01');

  // console.log(actualizar)
  // Set the "capital" field of the city 'DC'
  // return actualizar.update({
  //   first: 'Yosi-actualizo'
  // })
  //.then(() => {
  //        console.log('Document successfully updated!', actualizar);
  //    })
  //  .catch((error) => {
  // The document probably doesn't exist.
  //  console.error('Error updating document: ', error);
  //});

  //Eliminar un documento

  //  this.db.collection('pruebba').doc('01').delete().then(() => {
  //   console.log('Document successfully deleted!');
  // }).catch((error) => {
  //  console.error('Error removing document: ', error);
  // });

  //Leer un documento de la colección
  //  let docRef = this.db.collection('pruebba').doc('01');

  //   docRef.get().toPromise().then((doc) => {
  //   if (doc.exists) {
  //   console.log('Document data:', doc.data());
  // } else {
  // doc.data() will be undefined in this case
  // console.log('No such document!');
  //      }
  //  }).catch((error) => {
  //console.log('Error getting document:', error);
  //});

  //leer todos los documentos

  //  this.db.collection('pruebba').get().toPromise().then((querySnapshot) => {
  //querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //        console.log(doc.id, ' => ', doc.data());
  //      });
  //  });

  //-----buscar documentos por where
  //  this.db.collection('pruebba').ref.where('last', '==', 'USA')
  //.get()
  //      .then((querySnapshot) => {
  //querySnapshot.forEach((doc) => {
  //          // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, ' => ', doc.data());
  //});
  //})
  //.catch((error) => {
  //        console.log('Error getting documents: ', error);
  //});


  //------Obtener todo los usuarios

  //  this.db.collection('pruebba').get().toPromise().then((querySnapshot) => {
  //querySnapshot.forEach((doc) => {
  //        console.log(`${doc.id} => ${doc.data()} => ${doc.data().}`);
  //    });
  //    });


  //Para traer en una lista lo que se requiera. CON EL PUSH
  //  this.db.collection('pruebba').ref
  //  .onSnapshot((querySnapshot) => {
  //const cities = [];
  //querySnapshot.forEach((doc) => {

  //          const dts: any = doc.data();
  //        cities.push(dts.last);
  //    });
  //console.log('Current cities in CA: ', cities[0], cities[1], cities[2], cities[3]);
  //});



  //  }

}
