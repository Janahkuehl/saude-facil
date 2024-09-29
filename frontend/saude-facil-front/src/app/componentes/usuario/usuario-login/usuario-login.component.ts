import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../../servicos/usuario.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-usuario-login',
    templateUrl: './usuario-login.component.html',
    styleUrls: ['./usuario-login.component.css'] 
})
export class UsuarioLoginComponent {

    usuario: Usuario = {
        id: 0,
        nome: '',
        telefone: '',
        sexo: '',
        idade: 0,
        senha: '',
        imagemPerfil: '',
        status: false,
    };

    erroLogin: boolean = false;

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ) { }

    realizarLogin() {
        const credenciais = {
            EMAIL: this.usuario.telefone,
            SENHA: this.usuario.senha
        };

        this.usuarioService.validarLogin(credenciais).subscribe(usuarioValido => {
            if (usuarioValido) {
                this.salvarSessao(usuarioValido);
                this.router.navigate(['/perfil']);
            } else {
                this.erroLogin = true;
            }
        });
    }

    salvarSessao(usuario: Usuario) {
        sessionStorage.setItem('usuario-id', usuario.id.toString());
        sessionStorage.setItem('usuario-nome', usuario.nome);
        sessionStorage.setItem('usuario-email', usuario.telefone);
    }

}

