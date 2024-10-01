import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

  constructor(
    private router: Router
  ) {}

  sair(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
