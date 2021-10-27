import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { FormsModule } from '@angular/forms';
import { AdicionarAlunosComponent } from './adicionar-alunos/adicionar-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    ListarAlunosComponent,
    AdicionarAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
