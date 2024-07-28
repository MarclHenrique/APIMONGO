import "dotenv/config"; //importando o dotenv para o arquivo principal, onde inicia tudo
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
