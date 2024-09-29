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
    observacao: ''
  };

  selectedFile!: File;

  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router
  ) { }

  salvar(): void {
    this.medicamentoService.add(this.medicamento).subscribe(novoMedicamento => {
      this.uploadImage(novoMedicamento);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(medicamento: Medicamento) {
    this.medicamentoService.uploadMedicamentoImagem(medicamento.id, this.selectedFile).subscribe(
      () => {
        this.router.navigate(['/hoje']);
      },
      error => console.error(error)
    );
  }

}
