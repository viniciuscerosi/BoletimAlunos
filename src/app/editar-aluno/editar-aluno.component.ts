import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Aluno } from '../aluno.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  //@Input() alunoParaExibir: Aluno;
  aluno: Aluno;

  constructor(private dataservice: DatabaseService, private route: ActivatedRoute,
    private acPage: Location) {
  }

  registerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    url: new FormControl(''),
  });

  ngOnInit(): void {
    this.aluno = this.dataservice.getAlunoById(this.route.snapshot.paramMap.get("id"))
    //this.dataservice.editAluno(this.route.snapshot.paramMap.get("id"));
    this.registerForm.controls['id'].setValue(this.aluno.id);
    this.registerForm.controls['name'].setValue(this.aluno.name);
    this.registerForm.controls['age'].setValue(this.aluno.age);
    this.registerForm.controls['url'].setValue(this.aluno.url);
    //this.acPage.back();
  }


  onSubmit() {
    this.aluno = this.registerForm.value;
    this.dataservice.editAluno(this.aluno);
    this.registerForm.reset();
    this.acPage.back();
  }

}