import { Component, OnInit } from '@angular/core';
import { IngresarService } from './ingresar.service';

@Component({
    selector: 'app-ingresar',
    templateUrl: './ingresar.component.html',
    styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit{
    constructor(private ingresarService: IngresarService) {}

    ngOnInit(): void {
        
    }

    get validando(){
        return this.ingresarService
    }
}

//inputLogin: string, inputPassword: string