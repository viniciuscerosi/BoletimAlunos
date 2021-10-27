import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent {


  constructor(private dataservice: DatabaseService, private local: Location) { }

  registerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    url: new FormControl(''),
  });

  aluno: Aluno;

  onSubmit() {
    this.aluno = this.registerForm.value;
    this.aluno.id = uuidv4();
    this.dataservice.addAluno(this.aluno);
    this.registerForm.reset();
    this.local.back();
  }


}
