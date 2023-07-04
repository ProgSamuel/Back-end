// 1 - ao abrir o sistema, deve ser exibida a tela de boas vindas junto com a quantidade de carros cadastrados
// 2 - solicitar ao usuário para que execute uma função
// 3 - executar a opção do usuário

"use strict";

let veiculosCadastrados = [
  {
    id: 0,
    modelo: "Civic",
    marca: "Honda",
    ano: 2014,
    cor: "Azul",
    preco: 40000.0,
  },
  {
    id: 1,
    modelo: "Corolla",
    marca: "Toyota",
    ano: 2015,
    cor: "Prata",
    preco: 45000.0,
  },
];
let contadorId = 2;

// ETAPA 1 - CADASTRAR VEÍCULO

function cadastrarVeiculo() {
  let modelo = prompt("Digite o MODELO do veículo a ser cadastrado:");
  let marca = prompt("Digite a MARCA do veículo a ser cadastrado:");
  let ano = parseInt(prompt("Digite o ANO do veículo a ser cadastrado:"));
  let cor = prompt("Digite a COR do veículo a ser cadastrado:");
  let preco = parseFloat(prompt("Digite o PREÇO do veículo a ser cadastrado:"));

  let novoVeiculo = { id: contadorId++, modelo, marca, ano, cor, preco };

  veiculosCadastrados.push(novoVeiculo);
  veiculosCadastrados.sort((a, b) => a.preco - b.preco); // foi usada para ordenar de acordo com o preço - do menor p/ o maior

  console.log("Veículo cadastrado com sucesso!");
}

// ETAPA 2 - LISTAR VEÍCULOS

function listarVeiculos() {
  let lista = "";

  for (const veiculo of veiculosCadastrados) {
    lista += `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}\n`;
  }

  if (lista === "") {
    console.log("Nenhum veículo cadastrado.");
  } else {
    console.log(lista);
  }
}

// ETAPA 3 - FILTRAR VEÍCULO

function filtrarVeiculosPorMarca() {
  const marcaFiltro = prompt("Digite a marca para filtrar os veículos:");
  let listaFiltrada = "";

  for (const veiculo of veiculosCadastrados) {
    if (veiculo.marca.toLowerCase() === marcaFiltro.toLowerCase()) {
      listaFiltrada += `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}\n`;
    }
  }

  if (listaFiltrada === "") {
    console.log("Nenhum veículo encontrado com essa marca.");
  } else {
    console.log(listaFiltrada);
  }
}

// ETAPA 4 - ATUALIZAR VEÍCULO

function atualizarVeiculo() {
  const identificador = parseInt(
    prompt("Digite o identificador do veículo a ser atualizado:")
  );
  let veiculoEncontrado = false;

  for (const veiculo of veiculosCadastrados) {
    if (veiculo.id === identificador) {
      veiculoEncontrado = true;
      veiculo.cor = prompt("Digite a nova cor do veículo:");
      veiculo.preco = parseFloat(prompt("Digite o novo preço do veículo:"));
      console.log("Veículo atualizado com sucesso!");
      break;
    }
  }

  if (!veiculoEncontrado) {
    console.log("Veículo não encontrado. Retorne ao menu inicial.");
  }
}

// ETAPA 5 - REMOVER VEÍCULO

function removerVeiculo() {
  const identificador = parseInt(
    prompt("Digite o identificador do veículo a ser removido:")
  );
  let veiculoEncontrado = false;

  for (let i = 0; i < veiculosCadastrados.length; i++) {
    if (veiculosCadastrados[i].id === identificador) {
      veiculoEncontrado = true;
      veiculosCadastrados.splice(i, 1);
      console.log("Veículo " + identificador +" removido com sucesso!");
      break;
    }
  }

  if (!veiculoEncontrado) {
    console.log("Veículo não encontrado. Retorne ao menu inicial.");
  }
}

// Usei o splice pq ele retorna um novo array, após remover diante do id selecioando 

// ETAPA 0 - LOOP
let comando;

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
      console.log("Saindo do programa...");
      break;
    default:
      console.log("Comando inválido.");
      break;
  }
} while (comando !== "6");
