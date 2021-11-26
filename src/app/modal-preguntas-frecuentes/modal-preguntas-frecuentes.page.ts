import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-preguntas-frecuentes',
  templateUrl: './modal-preguntas-frecuentes.page.html',
  styleUrls: ['./modal-preguntas-frecuentes.page.scss'],
})
export class ModalPreguntasFrecuentesPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  onChangePre(opcion:string){
    console.log(opcion)
    switch (opcion) {
      case "sst":
        window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/313/seguridad-y-salud-en-el-trabajo/";
        break;

      case "gerontologia":
        window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/315/gerontologia/";
        break;

      case "enfermeria":
        window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/314/enfermeria/";
        break;
      
      case "medicina":
        window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/312/medicina/";
        break;
    }
  }

  onChangePost(opcion:string){
    console.log(opcion)
  }

  async regresar(){
    const modal = await this.modalCtr.getTop();
        if (modal) {
            modal.dismiss();
        }
  }

}
