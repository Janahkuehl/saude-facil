import { Component } from '@angular/core';
import { ResponsavelService } from '../../servicos/responsavel.service';
import { Responsavel } from '../interfaces/responsavel';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrl: './responsavel.component.css'
})
export class ResponsavelComponent {

  listaResponsaveis: Responsavel[] = [];

constructor(
  private responsavelService: ResponsavelService
){}

ngOnInit(){
  this.responsavelService.findAll().subscribe(retorno => {
    this.listaResponsaveis = retorno;
  });
}

}
