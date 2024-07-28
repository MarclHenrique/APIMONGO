import { autor } from "../models/Autor.js";
import livro from "../models/livro.js";

class LivroController {
  static async ListarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao buscar livros` });
    }
  }

  static async ListarLivroPorID(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao buscar o livro` });
    }
  }

  static async CadastarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "Criado com Sucesso", livro: novoLivro });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao cadastrar livro` });
    }
  }

  static async atualizarLivroPorID(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao atualizar o livro` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro excluído" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao excluir o livro` });
    }
  };
  
  static async listarLivrosPorEditora (req, res){
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({editora: editora});
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na busca` });
    }
  }
}

export default LivroController;
