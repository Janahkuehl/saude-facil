import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../../servicos/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrl: './usuario-formulario.component.css'
})
export class UsuarioFormularioComponent {

  usuario: Usuario = {
    id: 0,
    nome: '',
    status: false,
    telefone: '',
    sexo: '',
    idade: 0
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ){}

  salvar(): void {
    this.usuarioService.add(this.usuario).subscribe(() => {
      this.router.navigate(['/hoje']);
    });
  }

}
