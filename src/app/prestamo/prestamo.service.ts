import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Prestamo } from "../interfaces/prestamo.interface";

@Injectable({
    providedIn: 'root'
})

export class PrestamoService{
    constructor(private http: HttpClient) { }

    public lista: Prestamo[] = [];

    listarPrestamo(){
        this.http.get<Prestamo[]>('http://127.0.0.1:8080/api/prestamo')
        .subscribe(resp => {
            this.lista = resp;
        });
    }
}