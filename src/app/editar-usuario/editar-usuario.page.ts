import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})

export class EditarUsuarioPage implements OnInit {

  public usuario: any;
  public nombres: string;
  public apellidos: string;
  public email: string;
  public password: string;
  public reppassword: string;
  public isReadOnly: boolean;
  public tableroMando: string;
  public botonEditar: string;
  public botonEliminar : string;
  public profile: string;
  public query:string;
  

  constructor(public activatedRoute: ActivatedRoute, db: AngularFirestore) { 
    this.usuario = db.collection("users")
  }

  ngOnInit() {  
    this.profile = this.activatedRoute.snapshot.paramMap.get("profile")
    this.tableroMando = "/tableroMando/"+this.profile  
    this.isReadOnly = true;
    this.botonEditar = "Editar";
    this.botonEliminar = "Eliminar";
  }

  onSubmitChangeUser(){
    if(this.botonEditar === "Editar"){
      this.isReadOnly = false;
      this.botonEditar = "Guardar";
    }else{
      this.isReadOnly = true;
      this.botonEditar = "Editar";
    }

  }

}
