import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunoComponent } from './aluno/aluno.component';
import { listaAlunoCadastrados } from './listaAlunos';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  listaAlunos: Aluno[] = listaAlunoCadastrados;

  aluno: Aluno;

  constructor() { }

  getAlunos(): Aluno[] {
    return this.listaAlunos;
  }

  getAlunoByName(nome: String): Aluno {
    for (let aluno of this.listaAlunos) {
      if (aluno.name == nome) {
        return aluno;
      }
    }
  }

  getAlunoById(idAluno: String): Aluno {
    for (let aluno of this.listaAlunos) {
      if (aluno.id == idAluno) {
        return aluno;
      }
    }
  }

  addAluno(aluno: Aluno) {
    if (aluno.age < 18) {
      return false;
    }
    this.listaAlunos.push(aluno);
    return this;
  }

  delAluno(idAluno: String): DatabaseService {
    this.listaAlunos.splice(this.listaAlunos.findIndex(({ id }) => id == idAluno), 1);
    return this;
  }

  editAluno(aluno: Aluno): DatabaseService {
    this.listaAlunos[this.listaAlunos.findIndex(a => a.id
      == aluno.id)] = aluno;
    return this;
  }
}