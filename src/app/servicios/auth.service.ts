import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { promise } from 'protractor';
import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.afauth.signInWithEmailAndPassword(email, password).then(user => {
        console.log('Esta logueado: ' + user);
        resolve(user);
      }).catch(err => rejected(err));

    });

  }
  logout() {
    this.afauth.signOut().then(() => {
      this.router.navigate(['/login']);
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
}
