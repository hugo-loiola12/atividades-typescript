export class Produto {
  constructor(
    public id: string,
    public nome: string,
    public descricao: string,
    public preco: number,
    public quantidade: number,
    public categoriaId: string,
    public dataCriacao: Date = new Date(),
    public dataAtualizacao: Date = new Date(),
  ) {}
}
