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
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule), canActivate: [NologinGuard]
  },
  {
    path: 'tableroMandoPrueba',
    loadChildren: () => import('./tablero-mando-prueba/tablero-mando.module').then(m => m.TableroMandoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'rememberPass',
    loadChildren: () => import('./remember-pass/remember-pass.module').then(m => m.RememberPassPageModule), canActivate: [NologinGuard]
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioPageModule)
  },
  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./cambiar-contrasena/cambiar-contrasena.module').then(m => m.CambiarContrasenaPageModule)
  },
  {
    path: 'createUsuario',
    loadChildren: () => import('./create-usuario/create-usuario.module').then(m => m.CreateUsuarioPageModule)
  },
  {
    path: 'gestionarUsuario',
    loadChildren: () => import('./gestionar-usuario/gestionar-usuario.module').then(m => m.GestionarUsuarioPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'updateLink',
    loadChildren: () => import('./update-link/update-link.module').then(m => m.UpdateLinkPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'modal-servicios-academicos',
    loadChildren: () => import('./modal-servicios-academicos/modal-servicios-academicos.module').then( m => m.ModalServiciosAcademicosPageModule)
  },
  {
    path: 'modal-preguntas-frecuentes',
    loadChildren: () => import('./modal-preguntas-frecuentes/modal-preguntas-frecuentes.module').then( m => m.ModalPreguntasFrecuentesPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
