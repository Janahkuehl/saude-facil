import { Component } from '@angular/core';
import { Responsavel } from '../../interfaces/responsavel';
import { ResponsavelService } from '../../../servicos/responsavel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsavel-formulario',
  templateUrl: './responsavel-formulario.component.html',
  styleUrl: './responsavel-formulario.component.css'
})
export class ResponsavelFormularioComponent {
  
  responsavel: Responsavel = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    grauParentesco: '',
    favorito: false
  }

  constructor(
    private responsavelService: ResponsavelService,
    private router: Router
  ){}

  salvar(): void {
    this.responsavelService.add(this.responsavel).subscribe(() => {
      this.router.navigate(['/hoje']);
    });
  }

}
