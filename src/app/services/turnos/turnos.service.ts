import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {

  private API_SERVER = "http://localhost:8080/api/turnos/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTurnos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  
  public saveTurnos(turno:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,turno);
  }

  public deleteTurnos(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

}
