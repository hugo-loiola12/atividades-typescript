import { Categoria, CategoriaInput } from "../entities/Categoria";

export class CategoriaRepository {
  private categorias: Categoria[] = [];
  private static ultimoId: number = 0; // Contador estático

  criar(dados: CategoriaInput): Categoria {
    const novoId = ++CategoriaRepository.ultimoId;

    const novaCategoria = new Categoria(
      novoId.toString(),
      dados.nome,
      dados.descricao,
    );
    this.categorias.push(novaCategoria);
    return novaCategoria;
  }

  listar(): Categoria[] {
    return this.categorias;
  }

  buscarPorId(id: string): Categoria | undefined {
    return this.categorias.find((c) => c.id === id);
  }

  atualizar(categoria: Categoria): void {
    const index = this.categorias.findIndex((c) => c.id === categoria.id);
    if (index !== -1) {
      this.categorias[index] = categoria;
    }
  }

  deletar(id: string): boolean {
    const index = this.categorias.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.categorias.splice(index, 1);
      return true;
    }
    return false;
  }
}
