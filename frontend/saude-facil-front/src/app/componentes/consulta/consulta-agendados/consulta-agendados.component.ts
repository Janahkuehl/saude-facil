import { Component } from '@angular/core';
import { ConsultaService } from '../../../servicos/consulta.service';
import { Consulta } from '../../interfaces/consulta';

@Component({
  selector: 'app-consulta-agendados',
  templateUrl: './consulta-agendados.component.html',
  styleUrl: './consulta-agendados.component.css'
})
export class ConsultaAgendadosComponent {

  constructor(
    private consultaService: ConsultaService
  ){}

  listaConsultas: Consulta[] = [];

  ngOnInit(){
    this.consultaService.findAll().subscribe(retorno => {
      this.listaConsultas = retorno;
    });
  }

}
