import { Component } from '@angular/core';
import { Responsavel } from '../../interfaces/responsavel';
import { ResponsavelService } from '../../../servicos/responsavel.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.responsavelService.findById(id).subscribe(retorno => {
        this.responsavel = retorno;
      });
    }
  }

  salvar(): void {
    this.responsavelService.add(this.responsavel).subscribe(() => {
      this.router.navigate(['/responsavel']);
    });
  }

}
