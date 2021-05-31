import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';

const routes: Routes =
  [
    {
      path: 'home',
      component: ListaProjetosComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
