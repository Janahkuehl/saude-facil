import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../../../servicos/medicamento.service';
import { Medicamento } from '../../interfaces/medicamento';

@Component({
  selector: 'app-medicamento-historico',
  templateUrl: './medicamento-historico.component.html',
  styleUrls: ['./medicamento-historico.component.css']
})
export class MedicamentoHistoricoComponent implements OnInit {

  listaMedicamentos: Medicamento[] = [];
  dataSelecionada: string = '';
  horaSelecionada: string = '';
  medicamento: any;

  constructor(
    private medicamentoService: MedicamentoService
  ) { }

  ngOnInit() {
    this.medicamentoService.findAll().subscribe(retorno => {
      this.listaMedicamentos = retorno;
    });
  }
}


