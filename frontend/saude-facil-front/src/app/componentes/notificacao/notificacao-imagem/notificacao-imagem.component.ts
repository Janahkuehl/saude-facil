import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notificacao-imagem',
  templateUrl: './notificacao-imagem.component.html',
  styleUrl: './notificacao-imagem.component.css'
})
export class NotificacaoImagemComponent {
  @Input() imagemSrc: string = '';

}
