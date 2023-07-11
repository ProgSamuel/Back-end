export default function expressUser(app) {
    //Array para armazenar os usuarios
    const users = [];
    let id = 0;
  
    //Rota para criar um usuario
    app.post("/users", (req, res) => {
      const { nome, senha } = req.body;
      const user = { id, nome, senha };
      users.push(user);
      id++;
      res
        .status(201)
        .json({ mensagem: "usuario criado com sucesso", user: user });
    });
  
    //Rota para listar todos os usuarios
    app.get("/users", (req, res) => {
      res.json(users);
    });
  
    //Rota para obter o usuario pelo ID
    app.get("/users/:id", (req, res) => {
      const id = req.params.id;
      const user = users.find((e) => e.id === parseInt(id));
  
      if (!user) {
        return res.status(404).json({ error: "Usuario não encontrado" });
      }
      return res.status(200).json({ mesagem: "Usuario encontrado!", user: user });
    });
  
    //Rota para atualizar o usuario pelo ID
    app.put("/users/:id", (req, res) => {
      const id = req.params.id;
      const nome = req.body.nome;
      const senha = req.body.senha;
      const user = users.find((e) => e.id === parseInt(id));
  
      if (!user) {
        return res.status(404).json({ error: "Usuario não encontrado" });
      }
      if (nome && senha) {
        user.nome = nome;
        user.senha = senha;
      } else if (nome && !senha) {
        user.nome = nome;
      } else {
        user.senha = senha;
      }
  
      return res.status(200).json({ mensagem: "Usuario atualizado", user: user });
    });
  
    //Rota para deletar um usuario pelo ID
    app.delete("/users/:id", (req, res) => {
      const id = req.params.id;
      const user = users.findIndex((e) => e.id === parseInt(id));
  
      if (user === -1) {
        return res.status(404).json({ error: "Usuario não encontrado" });
      }
      users.splice(user, 1);
      return res.status(200).json({ mensagem: "Usuario deletado" });
    });
  }