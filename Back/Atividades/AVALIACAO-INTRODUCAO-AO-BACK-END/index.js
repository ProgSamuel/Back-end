import express from "express";
/* lista de ususarios
   cada item é um objeto
   o objeto possui as seguintes propriedades
    - nome
    - identificador (unico para cada usuario)
    - email
    - senha
*/
const usuarios = [
  {
    nome: "Teste 1",
    identificador: 0,
    email: "teste1@teste.com",
    senha: "teste1",
  },
  {
    nome: "Teste 2",
    identificador: 1,
    email: "teste2@teste.com",
    senha: "teste2",
  },
];
let contador = 2;
const app = express();

app.use(express.json());

// rota teste
app.post("/teste", function (requisicao, resposta) {
  console.log(requisicao.body);
  resposta.send("Olá mundo");
});

// rota login
app.post("/login", function (requisicao, resposta) {
  const email = requisicao.body.email;
  const senha = requisicao.body.senha;

  // usando o find
  const usuario = usuarios.find(function (usuario) {
    if (usuario.email === email && usuario.senha === senha) {
      return true;
    }
  });

  if (usuario) {
    resposta.status(200);
    resposta.json(usuario);
  } else {
    resposta.status(400);
    resposta.send("usuário inválido");
  }
});

//rota cadastro 
app.post("/cadastro-de-usuario", function (requisicao, resposta) {
  if (
    requisicao.body.nome === undefined ||
    requisicao.body.email === undefined ||
    requisicao.body.senha === undefined
  ) {
    resposta.status(400);
    resposta.send("Você deve enviar nome, email e senha");
    return;
  }
  const novoUsuario = {
    nome: requisicao.body.nome,
    email: requisicao.body.email,
    senha: requisicao.body.senha,
    identificador: contador,
  };

  let possuiMesmoEmail = false;
  for (const usuario of usuarios) {
    if (usuario.email === novoUsuario.email) {
      possuiMesmoEmail = true;
    }
  }

  if (possuiMesmoEmail) {
    resposta.status(400);
    resposta.send("Já existe um usário cadastrado com esse email");
  } else {
    resposta.send("Usuário cadastrado com sucesso");
    usuarios.push(novoUsuario);
  }

  console.log("possui mesmo", possuiMesmoEmail);
  console.log(usuarios);
  // AQUI DENTRO VAI A REGRA PARA CADASTRAR USUÁRIOS
  contador++;
});



//  -------------- RECADOS ---------------------------
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

app.listen(3000, function () {
  console.log("Aplicação está rodando na porta 3000: http://localhost:3000");
  console.log("ip local: http://:3000");
});
