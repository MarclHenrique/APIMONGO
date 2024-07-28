import express, { Router } from "express";
import livros from "./livrosRoutes.js";
import autor from "./autorRotes.js"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso node js"));

  app.use(express.json(), livros, autor);
};

export default routes;
