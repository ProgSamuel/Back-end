/* 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares. */

let vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,60]

for (var i=0; i < vetor.length; i++){
    if (vetor[i]% 2 ==0) {
        console.log(vetor[i])
    }
}

