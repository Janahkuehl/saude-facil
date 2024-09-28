import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../../servicos/consulta.service';
import { Consulta } from '../../interfaces/consulta';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

@Component({
  selector: 'app-hoje',
  templateUrl: './hoje.component.html',
  styleUrls: ['./hoje.component.css'] 
})
export class HojeComponent implements OnInit {

  listaConsultasHoje: Consulta[] = [];
  dataAtual: Date = new Date();
  
  constructor(
    private consultaService: ConsultaService 
  ) {
    registerLocaleData(localePt);
  }

  ngOnInit(): void {
    this.consultaService.obterConsultasHoje().subscribe(retorno => {
      this.listaConsultasHoje = retorno;
    });
  }

}
