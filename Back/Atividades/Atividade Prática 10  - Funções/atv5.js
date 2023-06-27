/* 1. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.

Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores */

function perfeito(numero) {
    if (numero <= 1) {
      return false;
    }
    
    let soma = 0;
    
    for (let index = 1; index < numero; index++) {
        if (numero % index === 0) {
            soma += index;
        }
    }

    return numero === soma;
  }
  
  console.log(perfeito(6));
