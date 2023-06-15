/* 3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos. */

let numerosPerfeitos = [];
let numero = 1;
//while para parar o loop se tiver 4 elementos dentro do array


while (numerosPerfeitos.length < 4) {
  let somaDosDivisores = 0;
//Inicializa o loop para verificar as divisões daquele numeero
  for (let i = 1; i < numero; i++) { //aqui verificamos se o i é divispivel pelo nosso umeor e add na var somaDosSivisores
    if (numero % i === 0) {
      somaDosDivisores += i;
    }
  }
//aqui verificamos se a somaDosDivisores é igual ao numero, assim sendo nuemro perfeito, add ao fim do array de nuemrosPerfeitos
  if (somaDosDivisores === numero) {
    numerosPerfeitos.push(numero);
  }

  numero++;
}

console.log(numerosPerfeitos);
