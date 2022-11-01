import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './servicioLogin/autenticacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Generación de Turnos';
  nombreUsuario = this.loginProvider.nombreUsuarioLogueado;

  constructor(private loginProvider:AutenticacionService){

  }

  public visualizarMenu():boolean{
    return this.loginProvider.habilitarLogueo();
  }
}
