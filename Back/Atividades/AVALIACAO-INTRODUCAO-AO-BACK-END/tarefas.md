# FUNCIONALIDADES
- [] criar usuário:
  - armazenar seguintes informações:
    - identificador: id unico na nossa lista
    - nome: nome do usuário 
    - email: email do usuário
    - senha: senha para logar
  - regras:
    - [] não pode ter usuário com o mesmo email

- [] realizar login:
  - [] login sucesso: se o email + senha pertencer a algum usuário existente
  - [] retornar erro se nao pertencer a ninguem

- [] criar recado:
-identificador: (id) cada recado deve ser único
-título: todos os recados deve possuir um título
-descrição: recado 


# TAREFAS A SEREM FEITAS
- [x] criar aplicação web
- [] criar funcionalidade de cadastro do usuário
  - [x] criar api para cadastro de usuário (com console.log)
    - definicões:
      - método: `GET`
      - rota: `/cadastro-de-usuario`
  - [] criar variavel para armezar usuários

------------------------------------------

  const verificarAutenticacao = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  // O usuário não está autenticado, redirecione-o para a página de login ou retorne um erro
  return res.status(401).json({ error: 'Acesso não autorizado' });
}


const recados = [
  {
    titulo: "Título 1",
    descricao : "Descrição 1"
  }
]

let contadorRecados = 0

app.post("/recados/:id", verificarAutenticacao, (req, res) => {
  // Restante do código para criação de recados
  resposta.send("acesso");


});


// rota recados
app.post("/recados/:id", function (requisicao, resposta) {

  if (!user) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  if (
    requisicao.body.titulo === undefined ||
    requisicao.body.descricao === undefined 
  ) {
    resposta.status(401);
    resposta.send("Você deve enviar um titulo e descrição");
    return;
  }

  const novoRecado = {
    titulo: requisicao.body.titulo,
    descricao: requisicao.body.descricao,
    identificador: contadorRecados++,
  }

  if (requisicao.body.titulo && requisicao.body.descricao !== undefined ){
    recados.push(novoRecado);
    resposta.send("Recado cadastrado com sucesso");

  }
  console.log(requisicao.body);
  console.log(recados);
});
