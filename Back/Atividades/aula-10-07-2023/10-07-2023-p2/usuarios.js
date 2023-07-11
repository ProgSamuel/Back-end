import expressUser from "./usuarios.js";
import express, { json } from "express";
const app = express();
app.use(json());
expressUser(app);
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});