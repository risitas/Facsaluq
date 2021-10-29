import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: "full"
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),canActivate: [NologinGuard]
  },
  {
    path: 'tableroMando',
    loadChildren: () => import('./tablero-mando/tablero-mando.module').then(m => m.TableroMandoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'rememberPass',
    loadChildren: () => import('./remember-pass/remember-pass.module').then( m => m.RememberPassPageModule),canActivate: [NologinGuard]
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
