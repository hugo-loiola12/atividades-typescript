import prompt from "prompt-sync";
import { Categoria, CategoriaInput } from "../entities/Categoria";
import { ProdutoInput } from "../entities/Produto";
import { CategoriaRepository } from "../repositories/CategoriaRepository";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

const input = prompt();

export class MainMenu {
  constructor(
    private categoriaRepo: CategoriaRepository,
    private produtoRepo: ProdutoRepository,
  ) {}

  iniciar(): void {
    while (true) {
      console.log("\n=== MENU PRINCIPAL ===");
      console.log("1. Gerenciar Categorias");
      console.log("2. Gerenciar Produtos");
      console.log("0. Sair");

      const opcao = input("Escolha uma opção: ");

      switch (opcao) {
        case "1":
          this.menuCategorias();
          break;
        case "2":
          this.menuProdutos();
          break;
        case "0":
          console.log("Saindo...");
          process.exit(0);
        default:
          console.log("Opção inválida!");
      }
    }
  }
  // Categorias
  private menuCategorias(): void {
    while (true) {
      console.log("\n=== GERENCIAR CATEGORIAS ===");
      console.log("1. Criar categoria");
      console.log("2. Listar categorias");
      console.log("3. Buscar categoria");
      console.log("4. Atualizar categoria");
      console.log("5. Remover categoria");
      console.log("0. Voltar");

      const opcao = input("Escolha uma opção: ");

      if (opcao === "0") break;

      try {
        switch (opcao) {
          case "1":
            this.criarCategoria();
            break;
          case "2":
            this.listarCategorias();
            break;
          case "3":
            this.buscarCategoria();
            break;
          case "4":
            this.atualizarCategoria();
            break;
          case "5":
            this.removerCategoria();
            break;
          default:
            console.log("Opção inválida!");
        }
      } catch (error) {
        console.log(`Erro: ${error}`);
      }
    }
  }

  private criarCategoria(): void {
    console.log("\n=== NOVA CATEGORIA ===");

    const dados: CategoriaInput = {
      nome: input("Nome: "),
      descricao: input("Descrição: "),
    };

    try {
      const categoriaCriado = this.categoriaRepo.criar(dados);
      console.log(`Categoria criada com ID: ${categoriaCriado.id}`);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  private listarCategorias(): void {
    const categorias = this.categoriaRepo.listar();

    if (categorias.length === 0) {
      console.log("Nenhuma categoria cadastrada");
      return;
    }

    console.log("\n=== CATEGORIAS CADASTRADAS ===");
    categorias.forEach((c) => {
      console.log(`ID: ${c.id}`);
      console.log(`Nome: ${c.nome}`);
      console.log(`Descrição: ${c.descricao}`);
      console.log("-----------------------------");
    });
  }

  private buscarCategoria(): void {
    const termo = input("Digite ID ou nome para buscar: ");
    const categoria = this.categoriaRepo
      .listar()
      .find(
        (c) =>
          c.id === termo || c.nome.toLowerCase().includes(termo.toLowerCase()),
      );

    if (!categoria) {
      console.log("Categoria não encontrada");
      return;
    }

    console.log("\n=== CATEGORIA ENCONTRADA ===");
    console.log(`ID: ${categoria.id}`);
    console.log(`Nome: ${categoria.nome}`);
    console.log(`Descrição: ${categoria.descricao}`);
  }

  private atualizarCategoria(): void {
    const id = input("Digite o ID da categoria para atualizar: ");
    const categoria = this.categoriaRepo.buscarPorId(id);

    if (!categoria) {
      console.log("Categoria não encontrada");
      return;
    }

    console.log("\n=== ATUALIZAR CATEGORIA ===");
    const novoNome = input(`Novo nome [${categoria.nome}]: `) || categoria.nome;
    const novaDesc =
      input(`Nova descrição [${categoria.descricao}]: `) || categoria.descricao;

    const atualizada = new Categoria(
      categoria.id,
      novoNome,
      novaDesc,
      categoria.dataCriacao,
    );

    this.categoriaRepo.atualizar(atualizada);
    console.log("Categoria atualizada com sucesso!");
  }

  private removerCategoria(): void {
    const id = input("Digite o ID da categoria para remover: ");

    // Verificar produtos associados
    const produtos = this.produtoRepo
      .listar()
      .filter((p) => p.categoriaId === id);
    if (produtos.length > 0) {
      console.log(
        "Não é possível remover: Categoria possui produtos vinculados",
      );
      return;
    }

    const sucesso = this.categoriaRepo.deletar(id);
    console.log(sucesso ? "Categoria removida!" : "Categoria não encontrada!");
  }
  // Produtos
  private menuProdutos(): void {
    while (true) {
      console.log("\n=== GERENCIAR PRODUTOS ===");
      console.log("1. Criar produto");
      console.log("2. Listar produto");
      console.log("3. Buscar produto");
      console.log("4. Atualizar produto");
      console.log("5. Remover produto");
      console.log("0. Voltar");

      const opcao = input("Escolha uma opção: ");

      if (opcao === "0") break;

      try {
        switch (opcao) {
          case "1":
            this.criarProduto();
            break;
          case "2":
            this.listarProduto();
            break;
          case "3":
            this.buscarProduto();
            break;
          case "4":
            this.atualizarProduto();
            break;
          case "5":
            this.removerProduto();
            break;
          default:
            console.log("Opção inválida!");
        }
      } catch (error) {
        console.log(`Erro: ${error}`);
      }
    }
  }

  private criarProduto(): void {
    console.log("\n=== NOVO PRODUTO ===");

    const dados: ProdutoInput = {
      nome: input("Nome: "),
      descricao: input("Descrição: "),
      preco: parseFloat(input("Preço: ")),
      quantidade: parseInt(input("Quantidade: ")),
      categoriaId: parseInt(input("ID da categoria: ")),
    };

    try {
      const produtoCriado = this.produtoRepo.criar(dados);
      console.log(`Produto criado com ID: ${produtoCriado.id}`);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }
}
