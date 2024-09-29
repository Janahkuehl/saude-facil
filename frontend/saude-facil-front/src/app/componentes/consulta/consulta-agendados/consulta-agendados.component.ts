import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../../servicos/consulta.service';
import { Consulta } from '../../interfaces/consulta';

@Component({
  selector: 'app-consulta-agendados',
  templateUrl: './consulta-agendados.component.html',
  styleUrls: ['./consulta-agendados.component.css'] 
})
export class ConsultaAgendadosComponent implements OnInit {

  listaConsultas: Consulta[] = [];
  dataSelecionada: string = '';  
  horaSelecionada: string = '';  

  constructor(
    private consultaService: ConsultaService
  ){}

  ngOnInit() {
    this.consultaService.obterConsultasAgendadas().subscribe(retorno => {
      this.listaConsultas = retorno;
    });
  }


  }

