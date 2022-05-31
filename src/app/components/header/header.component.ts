import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  nome: string = 'Fillipe'
  cidade: string = '';
  desabilitaCidadeInput: boolean = false;

  ngOnInit(): void {
    //executa aqui quando a tela estiver carregando

  }

  alteraNome(){
    this.nome = 'Fillipe Félix'
  }

  resetCidade() {
    this.cidade = ''
  }

  desabilitaCidade() {
    this.desabilitaCidadeInput = true
  }
}
