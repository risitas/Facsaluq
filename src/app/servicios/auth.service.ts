import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { promise } from 'protractor';
import { enableProdMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFauth: AngularFireAuth) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {

      this.aFauth.signInWithEmailAndPassword(email, password).then(user => {
        console.log('Esta logueado: ' + user);
        resolve(user);
      }).catch(err => rejected(err));

    });


  }
}
