import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-edulab',
  templateUrl: './modal-edulab.page.html',
  styleUrls: ['./modal-edulab.page.scss'],
})
export class ModalEdulabPage implements OnInit {

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
