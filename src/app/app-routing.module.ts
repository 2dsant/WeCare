import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './core/not-found-component/not-found-component.component';
import { ScreenComponent } from './core/screen/screen.component';
import { ForumGridComponent } from './view/forum/forum-grid/forum-grid.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroProjetoComponent } from './view/projeto/cadastro-projeto/cadastro-projeto.component';
import { ProjetoGridComponent } from './view/projeto/projeto-grid/projeto-grid.component';
import { FormularioUserComponent } from './view/user/formulario-user/formulario-user.component';
import { GridUserComponent } from './view/user/grid-user/grid-user.component';

const routes: Routes =
  [
    {
      path: '',
      component: LoginComponent
    },
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
          component: ProjetoGridComponent
        },
        {
          path: 'projeto/cadastro',
          component: CadastroProjetoComponent
        },
        {
          path: 'user',
          component: GridUserComponent
        },
        {
          path: 'user/cadastro',
          component: FormularioUserComponent
        },

        {
          path: 'forum',
          component: ForumGridComponent
        },



        {
          path: '**',
          component: NotFoundComponentComponent
        }
      ],
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
