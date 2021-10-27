import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { ExcluirAlunoComponent } from './excluir-aluno/excluir-aluno.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    ListarAlunosComponent,
    EditarAlunoComponent,
    ExcluirAlunoComponent,
    CadastrarAlunoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
