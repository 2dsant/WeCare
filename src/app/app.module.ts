import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './view/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ScreenComponent } from './core/screen/screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormularioUserComponent } from './view/user/formulario-user/formulario-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroProjetoComponent } from './view/projeto/cadastro-projeto/cadastro-projeto.component';
import { ArquivoComponent } from './view/arquivos/arquivo/arquivo.component';
import { PostagemComponent } from './view/postagens/postagem/postagem.component';
import { GridUserComponent } from './view/user/grid-user/grid-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NotFoundComponentComponent } from './core/not-found-component/not-found-component.component';
import { ProjetoGridComponent } from './view/projeto/projeto-grid/projeto-grid.component';
import { FakeProjectComponent } from './view/projeto/fake-project/fake-project.component';
import { ForumGridComponent } from './view/forum/forum-grid/forum-grid.component';
import { LoginComponent } from './view/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ScreenComponent,
    FormularioUserComponent,
    CadastroProjetoComponent,
    ArquivoComponent,
    PostagemComponent,
    GridUserComponent,
    NotFoundComponentComponent,
    CadastroProjetoComponent,
    ProjetoGridComponent,
    FakeProjectComponent,
    ForumGridComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    NgSelectModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgxSpinnerModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
