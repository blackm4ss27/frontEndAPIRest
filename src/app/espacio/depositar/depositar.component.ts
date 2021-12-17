import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionesService } from '../operaciones/operaciones.service';

@Component({
    selector: 'app-depositar',
    templateUrl: './depositar.component.html',
    styleUrls: ['./depositar.component.css']
})

export class DepositarComponent implements OnInit{

    cantidad: number;
    cantidadIncorrecta: boolean;
    mensaje: string;

    constructor(private operacionesService: OperacionesService) {
        this.cantidad = 0;
        this.cantidadIncorrecta = false;
        this.mensaje = '';
    }

    ngOnInit(): void {
        
    }

    depositar(){

        if(this.cantidad < 0){
            this.mensaje='Error: cantidad incorrecta';
            this.cantidadIncorrecta=true;
            return;
        }

        else{
            const depositado = {
                dep: this.cantidad
            }

            this.operacionesService.depositar(depositado);

            //aasdasdasdasd
        }
    }
}