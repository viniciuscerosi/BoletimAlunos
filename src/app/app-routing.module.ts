import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { ExcluirAlunoComponent } from './excluir-aluno/excluir-aluno.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';

const routes: Routes = [
  { path: "alunos", component: ListarAlunosComponent },
  { path: "about", redirectTo: "/alunos", pathMatch: "prefix" },
  { path: "detalhes/:name", component: AlunoComponent },
  { path: "cadastrar", component: CadastrarAlunoComponent },
  { path: "excluir/:id", component: ExcluirAlunoComponent },
  { path: "", redirectTo: "/alunos", pathMatch: "full" },
  { path: '**', redirectTo: '/alunos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
