export class Categoria {
  constructor(
    public id: number, // ID numérico
    public nome: string,
    public descricao: string,
    public dataCriacao: Date = new Date(),
  ) {}
}
// Tipo para dados de criação
export type CategoriaInput = Omit<Categoria, "id" | "dataCriacao">;
