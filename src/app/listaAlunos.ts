import { Aluno } from "./aluno.model";
import { v4 as uuidv4 } from 'uuid';

export const listaAlunoCadastrados: Aluno[] = [
    { id: uuidv4(), name: "Guilherme", age: 22, url: "" },
    { id: uuidv4(), name: "Gustavo", age: 18, url: "" },
    { id: uuidv4(), name: "Gabriel", age: 20, url: "" },
    { id: uuidv4(), name: "Vinicius", age: 25, url: "" },
    { id: uuidv4(), name: "Alex", age: 21, url: "" }
]