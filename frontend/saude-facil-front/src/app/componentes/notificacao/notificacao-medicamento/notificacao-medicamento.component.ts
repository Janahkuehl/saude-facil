import { Component } from '@angular/core';
import { Medicamento } from '../../interfaces/medicamento';
import { MedicamentoService } from '../../../servicos/medicamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificacao-medicamento',
  templateUrl: './notificacao-medicamento.component.html',
  styleUrls: ['./notificacao-medicamento.component.css']
})

export class NotificacaoMedicamentoComponent {

  medicamento!: Medicamento;
  medicamentoImagem: any;

  constructor(
    private medicamentoService: MedicamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.medicamentoService.findById(id).subscribe(retorno => {
      this.medicamento = retorno;
      this.getMedicamentoImagem(this.medicamento.id);
    });
  }

  private getMedicamentoImagem(id: number){
    this.medicamentoService.getMedicamentoImagem(id).subscribe(
      (image: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        this.medicamentoImagem = urlCreator.createObjectURL(image);
      },
      error => console.error(error)
    );
  }

}
