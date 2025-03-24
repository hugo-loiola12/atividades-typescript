import inquirer from "inquirer";
import { CategoriaRepository } from "../repositories/CategoriaRepository";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

export class MainMenu {
  constructor(
    private categoriaRepo: CategoriaRepository,
    private produtoRepo: ProdutoRepository,
  ) {}

  async iniciar(): Promise<void> {
    const resposta = await inquirer.prompt({
      type: "list",
      name: "acao",
      message: "O que deseja fazer?",
      choices: ["Gerenciar Categorias", "Gerenciar Produtos", "Sair"],
    });

    switch (resposta.acao) {
      case "Gerenciar Categorias":
        await this.menuCategorias();
        break;
      case "Gerenciar Produtos":
        await this.menuProdutos();
        break;
      case "Sair":
        process.exit(0);
    }
  }

  private async menuCategorias(): Promise<void> {
    const resposta = await inquirer.prompt({
      type: "list",
      name: "acao",
      message: "Menu Categorias:",
      choices: ["Criar", "Listar", "Voltar"],
    });

    if (resposta.acao === "Criar") {
      const dados = await inquirer.prompt([
        { name: "nome", message: "Nome da categoria:" },
        { name: "descricao", message: "Descrição:" },
      ]);

      const novaCategoria = new Categoria(
        Math.random().toString(36).substr(2, 9), // ID único
        dados.nome,
        dados.descricao,
      );

      this.categoriaRepo.criar(novaCategoria);
      console.log("Categoria criada com sucesso!");
    }

    // Implemente listar, buscar, atualizar e remover
  }
}
