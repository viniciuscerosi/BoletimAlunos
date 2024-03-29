import { Aluno } from "./aluno.model";
import { v4 as uuidv4 } from 'uuid';

export const listaAlunoCadastrados: Aluno[] = [
    { id: uuidv4(), name: "Vinícius", age: 20, url: "https://thispersondoesnotexist.com/image" },
    { id: uuidv4(), name: "Minato", age: 34, url: "https://thispersondoesnotexist.com/image" },
    { id: uuidv4(), name: "Kurama", age: 83, url: "https://thispersondoesnotexist.com/image" },
    { id: uuidv4(), name: "Itachi", age: 28, url: "https://thispersondoesnotexist.com/image" },
    { id: uuidv4(), name: "Goenji", age: 18, url: "https://thispersondoesnotexist.com/image" }
]