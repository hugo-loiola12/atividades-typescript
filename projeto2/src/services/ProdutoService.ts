import { ProdutoRepository } from "../repositories/ProdutoRepository";
import { Produto } from "../entities/Produto";

export class ProdutoService {
    static async criar(nome: string, descricao: string, preco: number, quantidade: number, categoriaId: number) {
        const produto = ProdutoRepository.create({ nome, descricao, preco, quantidade, categoria: { id: categoriaId } });
        await ProdutoRepository.save(produto);
        return produto;
    }

    static async listar() {
        return await ProdutoRepository.find({ relations: ["categoria"] });
    }
}
