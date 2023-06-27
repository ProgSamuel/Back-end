/* 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando
        pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar
        cadastrando ou não.
        
        
        No final, mostre as pessoas que estão desempregadas, 
        
        as pessoas que estão empregadas separadas

        
        pelas que ganham mais que 2500 e menos que 2500. */

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let usuariosCadastrados = [];

function cadastrarUsuario() {
    let nome = prompt("Digite o nome:");

    let idade = parseInt(prompt("Digite a idade:"));
    if (idade <=0) { alert("Insira uma idade válida")}

    let trabalhando = confirm("Está trabalhando?");

    let salario;

    if (trabalhando === true) {
        salario = Number(prompt("Digite o salário ganho:"));
        if (salario <=0) { alert("Insira um salário válido")}

    } else {
        salario = 0;
    }

    return { nome, idade, trabalhando, salario };
}

let continuar = true;

while (continuar === true) {
    usuariosCadastrados.push(cadastrarUsuario());

    continuar = confirm("Deseja continuar cadastrando?");
}

// COMPARANDO AS ENTRADAS E EMITINDO AS SAÍDAS
const empregados = usuariosCadastrados.filter(usuario => usuario.trabalhando === true);
const maisDe2500 = empregados.filter(usuario => usuario.salario > 2500);
const menosDe2500 = empregados.filter(usuario => usuario.salario <= 2500);
const desempregados = usuariosCadastrados.filter(usuario => usuario.trabalhando === false);

document.write("Usuários empregados que recebem ACIMA DE R$2500:");
document.write(JSON.stringify(maisDe2500) + "<br><br><br>");

document.write("Usuários empregados que recebem R$2500 OU MENOS:");
document.write(JSON.stringify(menosDe2500) + "<br><br><br>");

document.write("Usuários desempregados:");
document.write(JSON.stringify(desempregados));
