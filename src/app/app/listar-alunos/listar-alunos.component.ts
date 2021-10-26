import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {

  listaAlunos: Aluno[];
  alunoSelecionado: Aluno;

  constructor(private service: DatabaseService) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos() {
    this.listaAlunos = this.service.getAlunos();
  }

}
