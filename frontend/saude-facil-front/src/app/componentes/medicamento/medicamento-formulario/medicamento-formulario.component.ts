import { Component } from '@angular/core';
import { Medicamento } from '../../interfaces/medicamento';
import { MedicamentoService } from '../../../servicos/medicamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-formulario',
  templateUrl: './medicamento-formulario.component.html',
  styleUrl: './medicamento-formulario.component.css'
})
export class MedicamentoFormularioComponent {

  medicamento: Medicamento = {
    id: 0,
    descricao: '',
    tempoLembrete: '',
    imagem: '',
    data: new Date,
  };

  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router
  ) { }

  salvar(): void {
    this.medicamentoService.add(this.medicamento).subscribe(() => {
      this.router.navigate(['/hoje']);
    });
  }

}
