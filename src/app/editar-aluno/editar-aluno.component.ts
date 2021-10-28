import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Aluno } from '../aluno.model';


@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  constructor(private dataservice: DatabaseService, private route: ActivatedRoute,
    private acPage: Location) { }

  ngOnInit(): void {
    this.dataservice.editAluno(this.route.snapshot.paramMap.get("id"));
    //this.acPage.back();
  }

  aluno: Aluno;

  registerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    url: new FormControl(''),
  });

  /*onSubmit() {
    this.aluno = this.registerForm.value;
    //this.aluno.id = uuidv4();
    this.dataservice.editAluno(this.aluno);
    this.registerForm.reset();
    this.local.back();
  }*/

}