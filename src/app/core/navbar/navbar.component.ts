import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  listaOfMenus = [
    { name: 'Cadastro de Usuários', routerLink: 'user/cadastro', title: 'Cadastrar novos usuarios no sistema' },
    { name: 'Cadastro de Projetos', routerLink: 'project/cadastro', title: 'Cadastrar novos projetos no sistema' }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;

}
