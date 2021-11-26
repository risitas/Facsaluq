import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-servicios-academicos',
  templateUrl: './modal-servicios-academicos.page.html',
  styleUrls: ['./modal-servicios-academicos.page.scss'],
})
export class ModalServiciosAcademicosPage implements OnInit {

  constructor(private modalCtr: ModalController,public router: Router) { 
    
  }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(['/tableroMandoPrueba']);
  }

  


}
