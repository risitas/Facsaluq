import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-redes-sociales',
  templateUrl: './modal-redes-sociales.page.html',
  styleUrls: ['./modal-redes-sociales.page.scss'],
})
export class ModalRedesSocialesPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  async regresar(){
    const modal = await this.modalCtr.getTop();
        if (modal) {
            modal.dismiss();
        }
  }

}
