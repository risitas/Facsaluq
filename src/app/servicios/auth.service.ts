import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { promise } from 'protractor';
import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


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
          console.log('Esta logueado: ' + user);
          resolve(user);
        }).catch(err => rejected(err));

      });
    } else {
      alert('Le faltan campos por llenar');
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

  register(email: string, password: string, nombres: string, apellidos: string, reppassword: string) {


    //Hacer métodos de confirmación

    return new Promise((resolve, rejected) => {
      this.afauth.createUserWithEmailAndPassword(email, password).then(res => {

        const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({

          id: uid,
          name: nombres,
          lastname: apellidos,
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

              alert('El envio fue exítoso, verifique su correo para restablecer su contraseña');
              console.log('hola');
              this.logout();
              this.contador = 1;
              return this.afauth.sendPasswordResetEmail(email);
            }

          }

          if (this.contador == 0) {

            alert('El correo ' + email + ' que acaba de ingresar no está registrado');
            console.log('Nohola');
            this.remember();
            this.contador = 0;
          }



        });
      } else {
        alert('Esto no es un correo, ingrese su correo.');
      }
    } else {
      alert('El campo está vacio');
    }
  }
}
