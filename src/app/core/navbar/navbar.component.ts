import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  listaOfMenus = [
    { name: 'Gestão de Usuários', routerLink: 'user', title: 'Gerenciar os usuarios do sistema' },
    { name: 'Gestão de Projetos', routerLink: 'projeto', title: 'Gerenciar projetos do sistema' },
    { name: 'Gestão de Foruns', routerLink: 'forum', title: 'Gerenciar os foruns do sistema' }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;

}
