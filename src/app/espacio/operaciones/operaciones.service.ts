import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class OperacionesService {
    monto: number;
    saldo: number;
    private depositos$ = new Subject<any>();

    constructor(){
        this.monto = 0;
        this.saldo = 0;
    }

    depositar(deposito: any){
        this.saldo = this.saldo + deposito.cantidad;
        this.depositos$.next(deposito);
    }

    //verDepositos(): Observable
}