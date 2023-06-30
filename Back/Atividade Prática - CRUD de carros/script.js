// 1 - ao abrir o sistema, deve ser exibida a tela de boas vindas junto com a quantidade de carros cadastrados
// 2 - solicitar ao usuário para que execute uma função
// 3 - executar a opção do usuário
"use strict";
let comando = "";
let id = 0;
let qtdcadastrados = document.getElementById("qtdcadastrados");
let veiculosCadastrados = [
  {
    id: 1,
    Modelo: "Civic",
    Marca: "Honda",
    Ano: 2014,
    Cor: "Azul",
    Preço: 40000,
  },
  {
    id: 2,
    Modelo: "Civic",
    Marca: "Tesla",
    Ano: 2014,
    Cor: "Azul",
    Preço: 40000,
  },
];
qtdcadastrados.textContent = veiculosCadastrados.length;

// ETAPA 1 - CADASTRAR VEÍCULO
function cadastrarVeiculo() {
  let modelo = prompt("Digite o MODELO do veículo a ser cadastrado:");
  let marca = prompt("Digite a MARCA do veículo a ser cadastrado:");
  let ano = parseInt(prompt("Digite a ANO do veículo a ser cadastrado:"));
  let cor = prompt("Digite a COR do veículo a ser cadastrado:");
  let preço = parseInt(prompt("Digite a PREÇO do veículo a ser cadastrado:"));
  id++;

  let novoVeiculo = { id, modelo, marca, ano, cor, preço };
  veiculosCadastrados.push(novoVeiculo);
  qtdcadastrados.textContent = veiculosCadastrados.length;

  return novoVeiculo;
}
// ETAPA 2 - LISTAR OS VEÍCULOS

function listarVeiculos() {
 /*  const listar = veiculosCadastrados.length( function (lista1){
    return lista1
  })

  console.log(` ID: ${lista.id} | Modelo: ${lista1.Modelo}| Cor: ${carro.Cor} | Preço: R$${carro.Preço}`)
 */

  for( const carro of veiculosCadastrados){
    console.log(` ID: ${carro.id} | Modelo: ${carro.Modelo} | Marca: ${carro.Marca} | Cor: ${carro.Cor} | Preço: R$${carro.Preço}`)
  }
  }


// ETAPA 3 - FILTRAR VEÍCULOS

function filtrarVeiculosPorMarca() {
  const marca = prompt("Digite a marca para filtrar os veículos: ")
  const marcafiltro = veiculosCadastrados.filter(function (carro) {
    return carro.Marca === marca
  });
  console.log(marcafiltro);
  marcafiltro.forEach(function (carro) {
    console.log(` ID: ${carro.id} | Modelo: ${carro.Modelo}| Cor: ${carro.Cor} | Preço: R$${carro.Preço}`)
  })
}


do {
  comando = prompt(
    "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
  );
  switch (comando) {
    case "1": cadastrarVeiculo(); break;
    case "2": listarVeiculos(); break;
    case "3": filtrarVeiculosPorMarca(); break;
    case "4": console.log("4 - Atualizar veículo");break;
    case "5": console.log("5 - Remover veículo");break;
    case "6": console.log("sair do programa"); break;
    default: console.log("comando invalido"); break;
  }
} while (comando !== "6");
