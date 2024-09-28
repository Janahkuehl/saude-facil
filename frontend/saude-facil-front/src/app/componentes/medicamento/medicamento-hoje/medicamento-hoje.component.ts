import { Component } from '@angular/core';
import { MedicamentoService } from '../../../servicos/medicamento.service';
import { Medicamento } from '../../interfaces/medicamento';

@Component({
  selector: 'app-medicamento-hoje',
  templateUrl: './medicamento-hoje.component.html',
  styleUrl: './medicamento-hoje.component.css'
})
export class MedicamentoHojeComponent {

  constructor(
    private medicamentoService: MedicamentoService
  ){}

  listaMedicamentos: Medicamento[] = [];

  ngOnInit(){
    this.medicamentoService.findAll().subscribe(retorno => {
      this.listaMedicamentos = retorno;
    });
  }

}
