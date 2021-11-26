import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-servicios-academicos',
  templateUrl: './modal-servicios-academicos.page.html',
  styleUrls: ['./modal-servicios-academicos.page.scss'],
})
export class ModalServiciosAcademicosPage implements OnInit {

  constructor(private modalCtr: ModalController) { 
    
  }

  ngOnInit() {
  }

  async regresar(){
    const modal = await this.modalCtr.getTop();
        if (modal) {
            modal.dismiss();
        }
  }

  


}
