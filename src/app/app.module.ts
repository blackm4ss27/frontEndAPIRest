import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SocioModule } from './socio/socio.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { IngresarModule } from './ingresar/ingresar.module';
import { EspacioModule } from './espacio/espacio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    SocioModule,
    CuentaModule,
    MovimientoModule,
    PrestamoModule,
    IngresarModule,
    EspacioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
