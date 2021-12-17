import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';

@Component({
    selector: 'app-listacuenta',
    templateUrl: './listacuenta.component.html',
    styleUrls: ['./listacuenta.component.css']
})
export class ListacuentaComponent implements OnInit {
    constructor(private cuentaService: CuentaService) {
        this.cuentaService.listarCuenta();
    }

    ngOnInit(): void {
    }

    get lista(){
        return this.cuentaService.lista;
    }
}