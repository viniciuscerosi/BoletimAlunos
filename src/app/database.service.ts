import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { listaAlunoCadastrados } from './listaAlunos';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  listaAlunos: Aluno[] = listaAlunoCadastrados;

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

  addAluno(aluno: Aluno) {
    if (aluno.age < 18) {
      return false;
    }
    this.listaAlunos.push(aluno);
    return true;
  }
}
