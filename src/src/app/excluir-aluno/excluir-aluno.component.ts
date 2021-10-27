import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-excluir-aluno',
  templateUrl: './excluir-aluno.component.html',
  styleUrls: ['./excluir-aluno.component.css']
})
export class ExcluirAlunoComponent implements OnInit {

  constructor(private dataservice: DatabaseService, private route: ActivatedRoute,
    private acPage: Location) { }

  ngOnInit(): void {
    this.dataservice.delAluno(this.route.snapshot.paramMap.get("id"));
    this.acPage.back();
  }

}
