import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../interfaces/consulta';
import { ConsultaService } from '../../../servicos/consulta.service';

@Component({
  selector: 'app-consulta-historico',
  templateUrl: './consulta-historico.component.html',
  styleUrl: './consulta-historico.component.css'
})
export class ConsultaHistoricoComponent implements OnInit {

  listaConsultas: Consulta[] = [];
  dataSelecionada: string = '';
  horaSelecionada: string = '';

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.consultaService.obterConsultasHistorico().subscribe(retorno => {
      this.listaConsultas = retorno;
    });
  }
}


