/* 1. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for. */

function numeroPrimo(numero) {
    if (numero <= 1) {
      return false
    }
     for (let index = 2; index < numero; index++) {
       if (numero % index === 0) {
         return false
       }
     }
    return true
  }
  
  console.log(numeroPrimo(7))
  console.log(numeroPrimo(1))
  console.log(numeroPrimo(10))