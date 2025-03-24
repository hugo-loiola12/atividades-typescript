export class Produto {
  constructor(
    public id: string,
    public nome: string,
    public descricao: string,
    public preco: number,
    public quantidade: number,
    public categoriaId: number,
    public dataCriacao: Date = new Date(),
    public dataAtualizacao: Date = new Date(),
  ) {}
}

// Tipo para dados de criação
export type ProdutoInput = Omit<
  Produto,
  "id" | "dataCriacao" | "dataAtualizacao"
>;
