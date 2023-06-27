/* 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2). */

function calcularMedia(notas, letra){
    let media = 0;
    if (letra ==='A'){
        media = (notas[0] + notas[1] + notas[2])/3;
    } else if (letra === 'P'){
        media = (notas[0]*5 + notas[1]*3 + notas[2]*2)/10;
    } else {
        return "Letra Inválida!"
    }

    return media ;
}

let notasDoAluno = [8,3,9];
let letra = "A"
const mediaCalculada = calcularMedia(notasDoAluno, letra);
console.log("media do aluno", mediaCalculada);