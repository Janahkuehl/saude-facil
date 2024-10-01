import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../../servicos/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-foto',
  templateUrl: './usuario-foto.component.html',
  styleUrl: './usuario-foto.component.css'
})
export class UsuarioFotoComponent {

  usuario!: Usuario;
  usuarioFoto: any;
  route: any;

  constructor(
    private usuarioService: UsuarioService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.findById(id).subscribe(retorno => {
      this.usuario = retorno;
      // this.uploadProfileImage(this.usuario.id);
    });
  }

  // private uploadProfileImage(id: number){
  //   this.usuarioService.uploadProfileImage(id).subscribe(
  //     (image: Blob) => {
  //       const urlCreator = window.URL || window.webkitURL;
  //       this.uploadProfileImage = urlCreator.createObjectURL(image);
  //     },
  //     error => console.error(error)
  //   );
  // }

}