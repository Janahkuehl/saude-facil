import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../../servicos/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-foto',
  templateUrl: './usuario-foto.component.html',
  styleUrl: './usuario-foto.component.css'
})
export class UsuarioFotoComponent {

  usuario!: Usuario;
  selectedFile!: File;
  profileImage: any;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.usuario.imagemPerfil = event.target.files[0];
  }

  uploadImage() {
    this.usuarioService.uploadProfileImage(this.usuario.id, this.selectedFile).subscribe(
      response => {
        this.getProfileImage(this.usuario.id);
      },
      error => console.error(error)
    );
  }

  ngOnInit() {
    const id = Number(sessionStorage.getItem('usuario-id'));
    this.usuarioService.findById(id).subscribe(response => {
      this.usuario = response;
      this.getProfileImage(this.usuario.id);
    });
  }

  private getProfileImage(id: number){
    this.usuarioService.getProfileImage(id).subscribe(
      (image: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        this.profileImage = urlCreator.createObjectURL(image);
      },
      error => console.error(error)
    );
  }

  sair(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}