import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasocioComponent } from './listasocio/listasocio.component';
import { NuevosocioComponent } from './nuevosocio/nuevosocio.component';



@NgModule({
  declarations: [
    ListasocioComponent,
    NuevosocioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SocioModule { }
