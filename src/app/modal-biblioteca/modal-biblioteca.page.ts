import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-biblioteca',
  templateUrl: './modal-biblioteca.page.html',
  styleUrls: ['./modal-biblioteca.page.scss'],
})
export class ModalBibliotecaPage implements OnInit {

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
