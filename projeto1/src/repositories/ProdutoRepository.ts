import { Produto } from "../entities/Produto";
import { CategoriaRepository } from "./CategoriaRepository";

export class ProdutoRepository {
  private produtos: Produto[] = [];
  private categoriaRepo = new CategoriaRepository();

  criar(produto: Produto): void {
    // Valida se a categoria existe
    const categoria = this.categoriaRepo.buscarPorId(produto.categoriaId);
    if (!categoria) throw new Error("Categoria não encontrada!");

    this.produtos.push(produto);
  }

  listar(): Produto[] {
    return this.produtos;
  }

  buscarPorId(id: string): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }

  atualizar(produto: Produto): void {
    const index = this.produtos.findIndex((p) => p.id === produto.id);
    if (index !== -1) {
      this.produtos[index] = produto;
    }
  }

  deletar(id: string): void {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }
}
