import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunoParaExibir: Aluno;

  constructor(private database: DatabaseService, private rota: ActivatedRoute, private local: Location) { }

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno(): void {
    let idAluno = this.rota.snapshot.paramMap.get("id");
    this.alunoParaExibir = this.database.getAlunoById(idAluno);
  }

}