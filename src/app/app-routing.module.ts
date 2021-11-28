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
    path: 'tableroMando',
    loadChildren: () => import('./tablero-mando/tablero-mando.module').then(m => m.TableroMandoPageModule), canActivate: [AuthGuard]
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
    loadChildren: () => import('./modal-servicios-academicos/modal-servicios-academicos.module').then(m => m.ModalServiciosAcademicosPageModule)
  },
  {
    path: 'modal-programas-academicos',
    loadChildren: () => import('./modal-programas-academicos/modal-programas-academicos.module').then(m => m.ModalProgramasAcademicosPageModule)
  },
  {
    path: 'modal-biblioteca',
    loadChildren: () => import('./modal-biblioteca/modal-biblioteca.module').then(m => m.ModalBibliotecaPageModule)
  },
  {
    path: 'modal-edulab',
    loadChildren: () => import('./modal-edulab/modal-edulab.module').then(m => m.ModalEdulabPageModule)
  },
  {
    path: 'modal-extension',
    loadChildren: () => import('./modal-extension/modal-extension.module').then(m => m.ModalExtensionPageModule)
  },
  {
    path: 'modal-redes-sociales',
    loadChildren: () => import('./modal-redes-sociales/modal-redes-sociales.module').then(m => m.ModalRedesSocialesPageModule)
  },
  {
    path: 'tableroMandoAdmin',
    loadChildren: () => import('./tablero-mando-admin/tablero-mando-admin.module').then(m => m.TableroMandoAdminPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
