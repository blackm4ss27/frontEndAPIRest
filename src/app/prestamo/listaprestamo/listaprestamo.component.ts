import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../prestamo.service';

@Component({
    selector: 'app-listaprestamo',
    templateUrl: './listaprestamo.component.html',
    styleUrls: ['./listaprestamo.component.css']
})

export class ListaprestamoComponent implements OnInit {
    constructor(private prestamoService: PrestamoService) {
        this.prestamoService.listarPrestamo();
    }

    ngOnInit(): void {
        
    }

    get lista(){
        return this.prestamoService.lista;
    }
}