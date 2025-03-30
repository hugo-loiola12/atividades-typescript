import { Request, Response } from "express";
import { Produto } from "../entities/Produto";
import { AppDataSource } from "../database/AppDataSource";

class ProdutoController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, descricao, preco, quantidade, categoriaId } = req.body;
      const produtoRepository = AppDataSource.getRepository(Produto);
      const novoProduto = produtoRepository.create({
        nome,
        descricao,
        preco,
        quantidade,
        categoria: { id: categoriaId }
      });
      await produtoRepository.save(novoProduto);
      return res.status(201).json(novoProduto);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar produto", error });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const produtoRepository = AppDataSource.getRepository(Produto);
      const produtos = await produtoRepository.find({ relations: ["categoria"] });
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar produtos", error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const produtoRepository = AppDataSource.getRepository(Produto);
      
      // Verifica se o produto existe antes de deletar
      const produto = await produtoRepository.findOneBy({ id });
      
      if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      await produtoRepository.delete(id);
      
      return res.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar produto", error });
    }
  }

  async deleteByCategoria(req: Request, res: Response): Promise<Response> {
    try {
      const categoriaId = parseInt(req.params.categoriaId);
      const produtoRepository = AppDataSource.getRepository(Produto);
      
      // Verifica se existem produtos para a categoria
      const produtos = await produtoRepository.find({ 
        where: { categoria: { id: categoriaId } } 
      });
      
      if (produtos.length === 0) {
        return res.status(404).json({ message: "Nenhum produto encontrado para esta categoria" });
      }

      await produtoRepository.delete({ categoria: { id: categoriaId } });
      
      return res.status(200).json({ 
        message: `${produtos.length} produto(s) da categoria deletado(s) com sucesso` 
      });
    } catch (error) {
      return res.status(500).json({ 
        message: "Erro ao deletar produtos da categoria", 
        error 
      });
    }
  }
}

export default new ProdutoController();