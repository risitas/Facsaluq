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

        if (auth == null) {
         
          return true;
        } else {
          //TODO: PENDIENTE!!!!!!
          this.router.navigate(['/tableroMando/1']);
          return false;
        }
  
        //console.log(auth);
        //return false;
      }));
  
  }

}
