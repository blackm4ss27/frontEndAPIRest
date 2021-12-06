import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { BlankComponent } from './shared/blank/blank.component';
import { ListasocioComponent } from './socio/listasocio/listasocio.component';
import { NuevosocioComponent } from './socio/nuevosocio/nuevosocio.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
