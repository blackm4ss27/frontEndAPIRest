import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Cuenta } from '../interfaces/cuenta.interface';

@Injectable({
    providedIn: 'root'
})
export class CuentaService {
    constructor(private http: HttpClient) { }

    public lista: Cuenta[] = [];

    listarCuenta(){
        this.http.get<Cuenta[]>('http://127.0.0.1:8080/api/cuenta')
        .subscribe(resp => {
            this.lista = resp;
        })
    }

    agregarCuenta(cuenta: Cuenta){
        this.http.post<any>('http://127.0.0.1:8080/api/cuenta', cuenta).subscribe();
    }
}