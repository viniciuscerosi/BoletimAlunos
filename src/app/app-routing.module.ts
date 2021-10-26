import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';

const routes: Routes = [
  { path: "alunos", component: ListarAlunosComponent },
  { path: "about", redirectTo: "/alunos", pathMatch: "prefix" },
  { path: "detalhes/:nome", component: AlunoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
