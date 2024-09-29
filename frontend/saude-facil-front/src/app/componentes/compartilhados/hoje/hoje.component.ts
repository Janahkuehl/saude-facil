import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../../servicos/consulta.service';
import { Consulta } from '../../interfaces/consulta';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MedicamentoService } from '../../../servicos/medicamento.service';

@Component({
  selector: 'app-hoje',
  templateUrl: './hoje.component.html',
  styleUrls: ['./hoje.component.css'] 
})
export class HojeComponent implements OnInit {

  listaConsultasHoje: Consulta[] = [];
  dataAtual: Date = new Date();
  listaMedicamentosHoje: any;
  
  constructor(
    private consultaService: ConsultaService,
    private medicamentoService: MedicamentoService 
  ) {
    registerLocaleData(localePt);
  }

  ngOnInit(): void {
    this.consultaService.obterConsultasHoje().subscribe(retorno => {
      this.listaConsultasHoje = retorno;
    });

    this.medicamentoService.obterMedicamentosHoje().subscribe(retorno => {
      this.listaMedicamentosHoje = retorno;
    });
  }

}
