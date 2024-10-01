import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../../servicos/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    idade: 0,
    senha: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const id: number = Number(sessionStorage.getItem('usuario-id'));
    if (id) {
      this.usuarioService.findById(id).subscribe(retorno => {
        this.usuario = retorno;
      });
    }
  }

  salvar(): void {
    this.usuarioService.add(this.usuario).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
