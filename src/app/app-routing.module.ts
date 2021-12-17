import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { BlankComponent } from './shared/blank/blank.component';
import { ListasocioComponent } from './socio/listasocio/listasocio.component';
import { NuevosocioComponent } from './socio/nuevosocio/nuevosocio.component';
import { ListacuentaComponent } from './cuenta/listacuenta/listacuenta.component';
import { ListamovimientoComponent } from './movimiento/listamovimiento/listamovimiento.component';
import { ListaprestamoComponent } from './prestamo/listaprestamo/listaprestamo.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { EspaciomainComponent } from './espacio/espaciomain/espaciomain.component';
import { MicuentaComponent } from './espacio/micuenta/micuenta.component';
import { OperacionesComponent } from './espacio/operaciones/operaciones.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    pathMatch: 'full'
  },
  {
    path: 'socio',
    component: ListasocioComponent,
    pathMatch: 'full'
  },
  {
    path: 'socio/nuevo',
    component: NuevosocioComponent,
    pathMatch: 'full'
  },
  {
    path: 'cuenta',
    component: ListacuentaComponent,
    pathMatch: 'full'
  },
  {
    path: 'movimiento',
    component: ListamovimientoComponent,
    pathMatch: 'full'
  },
  {
    path: 'prestamo',
    component: ListaprestamoComponent,
    pathMatch: 'full'
  },
  {
    path: 'ingresar',
    component: IngresarComponent,
    pathMatch: 'full'
  },
  {
    path: 'espacio',
    component: EspaciomainComponent,
    pathMatch: 'full'
  },
  {
    path: 'espacio/micuenta',
    component: MicuentaComponent,
    pathMatch: 'full'
  },
  {
    path: 'espacio/micuenta/operaciones',
    component: OperacionesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
