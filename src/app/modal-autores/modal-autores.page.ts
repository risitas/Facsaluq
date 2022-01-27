import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-autores',
  templateUrl: './modal-autores.page.html',
  styleUrls: ['./modal-autores.page.scss'],
})
export class ModalAutoresPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  async regresar() {
    const modal = await this.modalCtr.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

}
