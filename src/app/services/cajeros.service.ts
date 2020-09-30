import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CajerosService {

  constructor(private http: HttpClient) { }

  obtenerBancos(){
  
    return this.http.get('https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=700');
    
  }
}
