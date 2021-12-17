import { Component, OnInit } from '@angular/core';
import { SocioService } from '../socio.service';
import { Socio } from '../../interfaces/socio.interface';


@Component({
  selector: 'app-listasocio',
  templateUrl: './listasocio.component.html',
  styleUrls: ['./listasocio.component.css']
})
export class ListasocioComponent implements OnInit {

  constructor(private socioService: SocioService) { 
    this.socioService.listarSocio();
    //this.socioService.eliminarSocio(id):
    // this.socioService.listarSocio();
  }

  

  ngOnInit(): void {
  }

  get lista(){
    return this.socioService.lista;
  }

  // borrarSocio(id){
  //   return this.socioService.eliminarSocio;
  // }

}
