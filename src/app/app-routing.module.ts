import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenComponent } from './core/screen/screen.component';
import { HomeComponent } from './view/home/home.component';
import { ListaProjetosComponent } from './view/projeto/lista-projetos/lista-projetos.component';

const routes: Routes =
  [
    {
      path: '',
      component: ScreenComponent,
      children: [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'projeto',
          component: ListaProjetosComponent
        }

      ],
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
