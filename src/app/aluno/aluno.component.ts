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

  @Input() alunoParaExibir: Aluno;

  constructor(private database: DatabaseService, private rota: ActivatedRoute, private local: Location) { }

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno(): void {
    let nomealuno = this.rota.snapshot.paramMap.get("nome");
    this.alunoParaExibir = this.database.getAlunoByName(nomealuno);
  }

}
