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

  register(email: string, password: string, name: string, lastname: string) {

    let profile:String;
    let docenteAdministrativo= new RegExp (/\w+@uniquindio\.edu\.co/,'i');
    let estudiante= new RegExp (/\w+@uqvirtual\.edu\.co/,'i');
    if(docenteAdministrativo.test(email)===true){
      profile="Docente/Administrativo";
    }else if(estudiante.test(email)===true){
      profile="Estudiante";
    }else{
      profile="Invitado";
    }

    return new Promise((resolve, rejected) => {

      this.afauth.createUserWithEmailAndPassword(email, password).then(res => {

        const uid = res.user.uid;
        console.log(profile)
        this.db.collection('users').doc(uid).set({

          id: uid,
          nombres: name,
          apellidos: lastname,
          correo: email,
          contrasena: password,
          perfil: profile

        });

        resolve(res);
      }).catch(err => rejected(err));
    });
  }
}
