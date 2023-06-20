/* 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos. */

let aluno1 = {
    nota1 : 8,
    nota2 : 6,
}

let aluno2 = {
    nota1 : 9,
    nota2 : 2,
}

console.log("Aluno 1");
console.log(aluno1);
console.log("Aluno 2");
console.log(aluno2);

const mediaAluno1 = (aluno1.nota1 + aluno1.nota2)/2
const mediaAluno2 = (aluno2.nota1 + aluno2.nota2)/2  

console.log("A média do Aluno 1 é: " + mediaAluno1);
console.log("A média do Aluno 2 é: " + mediaAluno2);

const mediaTurma = (mediaAluno1 + mediaAluno2)/2

console.log( "A média da turma é: " + mediaTurma);
