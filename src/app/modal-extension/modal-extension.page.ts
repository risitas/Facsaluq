import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-extension',
  templateUrl: './modal-extension.page.html',
  styleUrls: ['./modal-extension.page.scss'],
})
export class ModalExtensionPage implements OnInit {

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
