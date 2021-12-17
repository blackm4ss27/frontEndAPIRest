import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Socio } from '../interfaces/socio.interface';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http: HttpClient) { }

  public lista: Socio[] = [];

  listarSocio() {
    this.http.get<Socio[]>('http://127.0.0.1:8080/api/socio')
    .subscribe(resp => {
      this.lista = resp;
    });
  }

  agregarSocio(socio: Socio){
    this.http.post<any>('http://127.0.0.1:8080/api/socio', socio).subscribe();
  }

  eliminarSocio(id: number){
    this.http.delete<Socio[]>('http://127.0.0.1:8080/api/socio/{id}').subscribe();
  }
}
