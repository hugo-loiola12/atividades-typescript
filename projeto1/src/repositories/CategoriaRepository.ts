import { Categoria } from "../entities/Categoria";

export class CategoriaRepository {
  private categorias: Categoria[] = [];

  criar(categoria: Categoria): void {
    this.categorias.push(categoria);
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

  deletar(id: string): void {
    const index = this.categorias.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.categorias.splice(index, 1);
    }
  }
}
