import { Component, OnInit } from '@angular/core';
import { Socio } from '../../interfaces/socio.interface';
import { SocioService } from '../socio.service';

@Component({
  selector: 'app-nuevosocio',
  templateUrl: './nuevosocio.component.html',
  styleUrls: ['./nuevosocio.component.css']
})
export class NuevosocioComponent implements OnInit {

  constructor(private SocioService: SocioService) { }

  ngOnInit(): void {
  }

  

  crearSocio(inputNombre: string, inputApellidos: string, inputDni: string, inputSexo: string, inputOcupacion: string, inputFechanac: string, inputCorreo: string, inputCelular: string, inputLogin: string, inputContrasena: string){
    const nuevoSocio: Socio = {
      id: 0,
      nomSocio: inputNombre,
      apSocio: inputApellidos,
      dni: inputDni,
      sexo: inputSexo,
      ocupacion: inputOcupacion,
      fechaNac: inputFechanac,
      correo: inputCorreo,
      celular: inputCelular,
      login: inputLogin,
      contrasena: inputContrasena
    };
    
    this.SocioService.agregarSocio(nuevoSocio);
  }

}
