/* 1. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par. */

function imparidade(numero)
{
	return Boolean(numero % 2);
}

console.log("3 é impar: " + imparidade(3));
console.log("4 é impar: " + imparidade(4));