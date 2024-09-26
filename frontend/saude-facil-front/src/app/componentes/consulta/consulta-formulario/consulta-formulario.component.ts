import { Component } from '@angular/core';
import { Consulta } from '../../interfaces/consulta';
import { ConsultaService } from '../../../servicos/consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-formulario',
  templateUrl: './consulta-formulario.component.html',
  styleUrl: './consulta-formulario.component.css'
})
export class ConsultaFormularioComponent {
  consulta: Consulta = {
    id: 0,
    nomeMedico: '',
    exame: '',
    especialidade: '',
    endereco: '',
    data: new Date,
    tempoLembrete: 0,
    nota: ''
  };

  constructor(
    private consultaService: ConsultaService,
    private router: Router
  ) { }

  salvar(): void {
    this.consultaService.add(this.consulta).subscribe(() => {
      this.router.navigate(['/hoje']);
    });
  }

}
