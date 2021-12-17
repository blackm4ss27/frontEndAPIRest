import { NgModule } from "@angular/core";
import { MicuentaComponent } from "./micuenta/micuenta.component";
import { CommonModule } from '@angular/common';
import { OperacionesComponent } from './operaciones/operaciones.component';

@NgModule({
    declarations: [
        MicuentaComponent,
        OperacionesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EspacioModule { }