export class Categoria {
  constructor(
    public id: string,
    public nome: string,
    public descricao: string,
    public dataCriacao: Date = new Date(),
  ) {}
}
