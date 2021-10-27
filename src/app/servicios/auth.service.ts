import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { promise } from 'protractor';
import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private afauth: AngularFireAuth, private router: Router) { }

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
}
