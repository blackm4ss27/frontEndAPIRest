import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/cuenta.interface';
import { CuentaService } from '../cuenta.service';
import { Socio } from '../../interfaces/socio.interface';

@Component({
    selector: 'app-nuevacuenta',
    templateUrl: './nuevacuenta.component.html',
    styleUrls: ['./nuevacuenta.component.css']
})
export class NuevacuentaComponent implements OnInit {

    constructor(private cuentaService: CuentaService) { }

    ngOnInit(): void {
        
    }

    // crearCuenta(inputIdsocio: Socio, inputTipo: string, inputNrocta: string, inputSaldo: number){
    //     const nuevaCuenta: Cuenta = {
    //         id: 0,
    //         tipoCuenta: inputTipo,
    //         nroCuenta: inputNrocta,
    //         saldo: 0,
    //         //fechaApertura: inputFecha,
    //         //perteneceSocio: 
    //     }
    // }
}