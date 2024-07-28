import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores",AutorController.listarAutores);
routes.get("/autor/:id", AutorController.listarAutorPorID);
routes.post("/autor", AutorController.cadastarAutor);
routes.put("/autor/:id", AutorController.atualizarAutorPorID);
routes.delete("/autor/:id", AutorController.deletarAutor);

export default routes;
