import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor(private afauth: AngularFireAuth, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.afauth.authState.pipe(map(auth => {

      //TODO: Revisar

      if (auth == null) {

        return true;
      } else {
        this.router.navigate(['/tableroMandoPrueba']);

        // let cadena = auth.email;

/** 
        if (auth.email.includes('administrador')) {
          // console.log('Admin');
          this.router.navigate(['/tableroMandoAdmin/4']);
        } else if (auth.email.includes('uniquindio')) {
          //console.log('profesor');
          this.router.navigate(['/tableroMandoDocentes-Administrativos/3']);
        } else if (auth.email.includes('uqvirtual')) {
          //console.log('estudiante');
          this.router.navigate(['/tableroMandoEstudiantes/2']);
        } else {
          //console.log('invitado');
          this.router.navigate(['/tableroMandoInvitados/1']);
        }
*/

        return false;
      }

      //console.log(auth);
      //return false;
    }));

  }
}
