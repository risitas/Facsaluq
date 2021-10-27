import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { promise } from 'protractor';
import { enableProdMode } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private afauth: AngularFireAuth) { }

    login(email: string, password: string) {

        return new Promise((resolve, rejected) => {

            this.afauth.signInWithEmailAndPassword(email, password).then(user => {
                resolve(user);
            }).catch(err => rejected(err));

        });
    }
}