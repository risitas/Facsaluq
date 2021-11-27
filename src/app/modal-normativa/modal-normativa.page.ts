import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-normativa',
  templateUrl: './modal-normativa.page.html',
  styleUrls: ['./modal-normativa.page.scss'],
})
export class ModalNormativaPage implements OnInit {

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
