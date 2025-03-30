import { Request, Response } from "express";
import { Categoria } from "../entities/Categoria";
import { AppDataSource } from "../database/AppDataSource";

class CategoriaController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, descricao } = req.body;
      const categoriaRepository = AppDataSource.getRepository(Categoria);
      const novaCategoria = categoriaRepository.create({ nome, descricao });
      await categoriaRepository.save(novaCategoria);
      return res.status(201).json(novaCategoria);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar categoria", error });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const categoriaRepository = AppDataSource.getRepository(Categoria);
      const categorias = await categoriaRepository.find();
      return res.json(categorias);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar categorias", error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const categoriaRepository = AppDataSource.getRepository(Categoria);
      
      // Verifica se a categoria existe antes de deletar
      const categoria = await categoriaRepository.findOneBy({ id });
      
      if (!categoria) {
        return res.status(404).json({ message: "Categoria não encontrada" });
      }

      // Primeiro precisamos deletar os produtos associados (se houver)
      // Isso será implementado depois no produto.controller.ts
      
      // Depois deletamos a categoria
      await categoriaRepository.delete(id);
      
      return res.status(200).json({ message: "Categoria deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar categoria", error });
    }
  }
}

export default new CategoriaController();