import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.page.html',
  styleUrls: ['./gestionar-usuario.page.scss'],
})
export class GestionarUsuarioPage implements OnInit {
  public data;
  constructor() {
   }

  ngOnInit() {
    
    this.data=[
      {
          name: "AiA",
          code: "AI101",
          limit: 25000,
          account: "Life Insurance"
      },
      {
          name: "Cargills",
          code: "CF001",
          limit: 30000,
          account: "Food City"
      }
  ]
  }

}
