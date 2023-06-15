/* 1. Criar um array e percorrê-lo utilizando o loop for
a. Crie um array com o nome "nomes" e adicione 4 nomes de
pessoas que você conhece
b. Utilize o loop for para percorrer o array e exibir os nomes na
tela */

const nomes = ["Ana", "Júlia", "Pedro", "Paulo"]

for(let i = 0; i < nomes.length; i++){
    const element = nomes[i]
    console.log(element)
}