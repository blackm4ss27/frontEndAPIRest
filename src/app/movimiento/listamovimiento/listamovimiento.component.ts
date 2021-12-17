import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../movimiento.service';

@Component({
    selector: 'app-listamovimiento',
    templateUrl: './listamovimiento.component.html',
    styleUrls: ['./listamovimiento.component.css']
})
export class ListamovimientoComponent implements OnInit {
    constructor(private movimientoService: MovimientoService) {
        this.movimientoService.listarMovimiento();
    }

    ngOnInit(): void {
    }

    get lista(){
        return this.movimientoService.lista;
    }
}