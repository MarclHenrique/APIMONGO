import express, { Router } from "express";
import conectaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

const conexao = await conectaDatabase(); // Estabelecendo conexão com Banco de dados

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita");
});


export default app;
