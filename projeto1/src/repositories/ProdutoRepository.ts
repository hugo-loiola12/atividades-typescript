import { Produto, ProdutoInput } from "../entities/Produto";
import { CategoriaRepository } from "./CategoriaRepository";

export class ProdutoRepository {
  private produtos: Produto[] = [];
  private static ultimoId: number = 0; // Contador estático

  constructor(private categoriaRepo: CategoriaRepository) {}

  criar(dados: ProdutoInput): Produto {
    const novoId = ++ProdutoRepository.ultimoId;
    const dataAtual = new Date();

    const novoProduto = new Produto(
      novoId.toString(),
      dados.nome,
      dados.descricao,
      dados.preco,
      dados.quantidade,
      dados.categoriaId,
      dataAtual, // dataCriacao
      dataAtual, // dataAtualizacao
    );

    this.produtos.push(novoProduto);
    return novoProduto;
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
