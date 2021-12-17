import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Movimiento } from '../interfaces/movimiento.interface';

@Injectable({
    providedIn: 'root'
})

export class MovimientoService{
    constructor(private http: HttpClient) { }

    public lista: Movimiento[] = [];

    listarMovimiento(){
        this.http.get<Movimiento[]>('http://127.0.0.1:8080/api/movimiento')
        .subscribe(resp => {
            this.lista = resp;
        });
    }
}