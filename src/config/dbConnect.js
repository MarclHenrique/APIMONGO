import mongoose, { mongo } from "mongoose"; //Importando o ORM

async function conectaDatabase () {
mongoose.connect(process.env.DB_CONNECTION); //chamando a variável de conexão do .env

return mongoose.connection; //Função para aguardar o banco de dados conectar e retornar os dados para api
};

export default conectaDatabase; // Exportando a função para que possa ser usada em outros arquivos
