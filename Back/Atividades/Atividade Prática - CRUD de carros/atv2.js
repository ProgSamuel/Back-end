"use strict";
let comando = "";
let id = 0;
let qtdcadastrados = document.getElementById("qtdcadastrados");
let veiculosCadastrados = [
  {
    id: 1,
    modelo: "Civic",
    marca: "Honda",
    ano: 2014,
    cor: "Azul",
    preco: 40000,
  },
  {
    id: 2,
    modelo: "Civic",
    marca: "Tesla",
    ano: 2014,
    cor: "Azul",
    preco: 40000,
  },
];
qtdcadastrados.textContent = veiculosCadastrados.length;
let contadorId = 0;
contadorId += veiculosCadastrados.length;

// ETAPA 1 - CADASTRAR VEÍCULO
function cadastrarVeiculo() {
  let modelo = prompt("Digite o MODELO do veículo a ser cadastrado:");
  let marca = prompt("Digite a MARCA do veículo a ser cadastrado:");
  let ano = parseInt(prompt("Digite o ANO do veículo a ser cadastrado:"));
  let cor = prompt("Digite a COR do veículo a ser cadastrado:");
  let preco = parseInt(prompt("Digite o PREÇO do veículo a ser cadastrado:"));
  id++;

  let novoVeiculo = { id, modelo, marca, ano, cor, preco };
  veiculosCadastrados.push(novoVeiculo);
  qtdcadastrados.textContent = veiculosCadastrados.length;

  return novoVeiculo;
}

// ETAPA 2 - LISTAR OS VEÍCULOS

function listarVeiculos() {
  for (const carro of veiculosCadastrados) {
    console.log(
      ` ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Cor: ${carro.cor} | Preço: R$${carro.preco}`
    );
  }
}

// ETAPA 3 - FILTRAR VEÍCULOS

function filtrarVeiculosPorMarca() {
  const marca = prompt("Digite a marca para filtrar os veículos: ");
  const marcaFiltro = veiculosCadastrados.filter(function (carro) {
    return carro.marca === marca;
  });
  console.log(marcaFiltro);
  marcaFiltro.forEach(function (carro) {
    console.log(
      ` ID: ${carro.id} | Modelo: ${carro.modelo} | Cor: ${carro.cor} | Preço: R$${carro.preco}`
    );
  });
}

// ETAPA 4 - ATUALIZAR VEÍCULO

function atualizarVeiculo() {
  let identificador = parseInt(prompt("Digite o identificador do veículo: "));
  
  for (let i = 0; i < veiculosCadastrados.length; i++) {
    if (veiculosCadastrados[i].id === identificador) {
      veiculosCadastrados[i].cor = prompt("Digite a nova cor do veículo para atualizar: ");
      veiculosCadastrados[i].preco = parseFloat(prompt("Digite o novo preço do veículo para atualizar: "));
    }
  }
}

  // ETAPA 5 - REMOVER VEÍCULO

  function removerVeiculo(){

    let identificador = Number.parseInt(prompt('Digite o identificador do veículo: '));

    for(let i=0; i<veiculosCadastrados.length;i++){
        if(veiculosCadastrados[i].id===identificador){
            veiculosCadastrados.splice(identificador, 1);
        }
    }

    if(identificador>veiculosCadastrados.length||identificador<0){
        console.log('Veículo não encontrado. Volte ao menu inicial.');
    }

    console.log(veiculosCadastrados);
}

do {
  comando = prompt(
    "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
  );
  switch (comando) {
    case "1":
      cadastrarVeiculo();
      break;
    case "2":
      listarVeiculos();
      break;
    case "3":
      filtrarVeiculosPorMarca();
      break;
    case "4":
      atualizarVeiculo();
      break;
    case "5":
      removerVeiculo();
      break;
    case "6":
      console.log("sair do programa");
      break;
    default:
      console.log("comando invalido");
      break;
  }
} while (comando !== "6");