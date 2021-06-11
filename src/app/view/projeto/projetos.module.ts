import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';

@NgModule({
  declarations: [
    ListaProjetosComponent,
    CadastroProjetoComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class ProjetosModule { }
