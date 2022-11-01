import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private banderaIngresar=false;
  public nombreUsuarioLogueado='John Fredy Roman Agudelo';

  constructor() { }

  public ingresarAplicacion(objeto:any):boolean{
    this.banderaIngresar = objeto.usuario == 'FredyRoman' &&  objeto.password == '123'
    return this.banderaIngresar;
  }

  public habilitarLogueo(){
    return this.banderaIngresar;
  }
}
