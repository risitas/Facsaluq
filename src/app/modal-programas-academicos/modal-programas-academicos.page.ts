import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-programas-academicos',
  templateUrl: './modal-programas-academicos.page.html',
  styleUrls: ['./modal-programas-academicos.page.scss'],
})
export class ModalProgramasAcademicosPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  onChangePre(opcion:string){
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
    switch (opcion) {
      case "especializacionPediatria":
        //window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/312/medicina/";
        break;

      case "maestriaRiesgosLaborales":
        //window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/312/medicina/";
        break;

      case "maestriaCienciasBiomedicas":
        //window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/312/medicina/";
        break;

      case "doctoradoCienciasBiomedicas":
        //window.location.href = "https://www.uniquindio.edu.co/programas/publicaciones/312/medicina/";
        break;
    
      default:
        break;
    }
  }

  async regresar(){
    const modal = await this.modalCtr.getTop();
        if (modal) {
            modal.dismiss();
        }
  }

}
