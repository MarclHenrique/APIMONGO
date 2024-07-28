import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.ListarLivroPorID);
routes.post("/livros", LivroController.CadastarLivro);
routes.put("/livros/:id", LivroController.atualizarLivroPorID);
routes.delete("/livros/:id", LivroController.deletarLivro);



export default routes;
