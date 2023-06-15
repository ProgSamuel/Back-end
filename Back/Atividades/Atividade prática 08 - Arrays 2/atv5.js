/* 5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte. */

const vetor = [1,2,3,4,5];
const numero = 5
let encontrado = false

for(let i=0; i<vetor.length; i++){
    if(numero===vetor[i]){
        encontrado=true
    }
}
if(encontrado){
    console.log('Número faz parte do vetor');
} else{
    console.log('Número não faz parte do vetor');
}