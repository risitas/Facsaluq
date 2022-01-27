import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-remember-pass',
  templateUrl: './remember-pass.page.html',
  styleUrls: ['./remember-pass.page.scss'],
})
export class RememberPassPage implements OnInit {

  public email: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  resetMyPass() {

    this.authService.resetPassword(this.email);

    //if(this.email != null){

    //  this.authService.resetPassword(this.email).then(() => {
    //    console.log('enviado');
    //  }).catch(() => {
    //    console.log('error');
   //   });
  //  }else{
  //    alert('Las instrucciones son muy claras');
  //  }

   
  }
}
