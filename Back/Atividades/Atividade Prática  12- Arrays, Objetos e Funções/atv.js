/* Dados do exercício */
const data = [
    {
      nome: "Roger Medeiros",
      sexo: "M",
      salario: 3250,
    },
    {
      nome: "Carolina Silva",
      sexo: "F",
      salario: 1200,
    },
    {
      nome: "Cristina Avila",
      sexo: "F",
      salario: 8100,
    },
    {
      nome: "Gustavo Hoffman",
      sexo: "M",
      salario: 5200.35,
    },
    {
      nome: "Eva Trindade",
      sexo: "F",
      salario: 2501,
    },
    {
      nome: "Andre Mathias",
      sexo: "M",
      salario: 1750,
    },
    {
      nome: "Joice Castro da Silva",
      sexo: "F",
      salario: 3350.25,
    },
  ];

  /* 1. Imprima no console a quantidade de pessoas Total. */

  console.log(" 1 - A quantidade de pessoas é: " + data.length);

  /* 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino. */

  let quantidadeF = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].sexo === "F") {
      quantidadeF++;
    }
  }

  console.log(
    " 2 - A quantidade de pessoas pessoas do sexo Feminino é: " +
      quantidadeF
  );

  /* 3. Imprima no console a soma do salário de todas as pessoas. */

  let totalSalario = 0;
  for (let i = 0; i < data.length; i++) {
    totalSalario += data[i].salario;
  }

  console.log(
    " 3 - A soma do salário de todas as pessoas é: R$ " +
      totalSalario.toFixed(2)
  );

  /* 4. Imprima no console a média do salário de todas as pessoas. */

  const mediaSalario = (totalSalario / data.length).toFixed(2);

  console.log(" 4 - A média de salário no grupo é de: R$ " + mediaSalario);

  /* 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino */

  let salarioM = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].sexo == "M") {
      salarioM += data[i].salario;
    }
  }

  console.log(
    " 5 - A soma do salário de todos as pessoas do sexo Masculino é: R$ " +
      salarioM.toFixed(2)
  );

  /* 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino */

  let mediaSalarioM = (salarioM / (data.length - quantidadeF)).toFixed(2);

  console.log(
    " 6 - A média do salário de todas as pessoas do sexo Masculino é: R$ " +
      mediaSalarioM
  );

  /* 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso. */

  const maiorQue7000 = data.some(function (element) {
    return element.salario >= 7000;
  });

  console.log(
    " 7 - Existe algum salário superior a R$ 7.000 ? " + maiorQue7000
  );

  /* 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'. */

  function findEvaPosition(element) {
    return element.nome === "Eva Trindade";
  }

  let evaPosition = data.findIndex(findEvaPosition);

  console.log(
    " 8 - A posição da pessoa de nome 'Eva Trindade' é: " + evaPosition
  );

  /* 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva". */

  function nomeSilva (element) {
      return element.nome.includes("Silva");
      
    }
    

  let nomeComSilva = data.filter(nomeSilva)

  console.log(" 9 - Pessoas que possuem o sobrenome 'Silva' : ", nomeComSilva);


  /* 10. Imprima os nomes utilizando o MAP */

  function nome (data) {
    return data.nome
  }
  
  console.log(" 10 - Impressão dos nomes usando o 'MAP' : ", data.map(nome));