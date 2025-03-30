import inquirer from "inquirer";
import { AppDataSource } from "./database/AppDataSource";
import categoriaController from "./controllers/categoria.controller";
import produtoController from "./controllers/produto.controller";

// Função para iniciar a CLI
async function startCLI() {
  // Inicializa o banco (se ainda não estiver inicializado)
  if (!AppDataSource.isInitialized) {
    try {
      await AppDataSource.initialize();
      console.log("Banco de dados conectado!");
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
      process.exit(1);
    }
  }

  // Menu de opções
  const mainMenu = async () => {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Escolha uma ação:",
        choices: [
          "Listar Categorias",
          "Criar Categoria",
          "Deletar Categoria",
          "Listar Produtos",
          "Criar Produto",
          "Deletar Produto",
          "Sair"
        ]
      }
    ]);

    switch (answer.action) {
      case "Listar Categorias":
        await listarCategorias();
        break;
      case "Criar Categoria":
        await criarCategoria();
        break;
      case "Deletar Categoria":
        await deletarCategoria();
        break;
      case "Listar Produtos":
        await listarProdutos();
        break;
      case "Criar Produto":
        await criarProduto();
        break;
      case "Deletar Produto":
        await deletarProduto();
        break;
      case "Sair":
        console.log("Encerrando a aplicação...");
        process.exit(0);
      default:
        break;
    }

    // Retorna ao menu principal
    await mainMenu();
  };

  await mainMenu();
}

// Função para listar categorias usando o controller
async function listarCategorias() {
  try {
    const categoriasResponse = await categoriaController.getAll(
      {} as any,
      { json: (data: any) => console.log("\nCategorias:", data) } as any
    );
  } catch (error) {
    console.error("Erro ao listar categorias:", error);
  }
}

// Função para criar categoria via CLI
async function criarCategoria() {
  const resposta = await inquirer.prompt([
    { type: "input", name: "nome", message: "Nome da categoria:" },
    { type: "input", name: "descricao", message: "Descrição da categoria:" }
  ]);

  try {
    const categoriaResponse = await categoriaController.create(
      { body: resposta } as any,
      { status: (code: number) => ({ json: (data: any) => console.log(`\nCategoria criada (${code}):`, data) }) } as any
    );
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
  }
}

// Função para deletar categoria
async function deletarCategoria() {
  try {
    // Primeiro listamos as categorias para o usuário escolher
    const categoriasResponse = await categoriaController.getAll(
      {} as any,
      { 
        json: async (categorias: any[]) => {
          if (categorias.length === 0) {
            console.log("\nNão há categorias cadastradas para deletar.");
            return;
          }

          console.log("\nCategorias disponíveis:");
          categorias.forEach(cat => {
            console.log(`ID: ${cat.id} | Nome: ${cat.nome}`);
          });

          const resposta = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message: "Digite o ID da categoria que deseja deletar:",
              validate: (input) => {
                return !isNaN(input) || "Por favor, digite um número válido";
              }
            },
            {
              type: "confirm",
              name: "confirmacao",
              message: "Tem certeza que deseja deletar esta categoria? (Isso também deletará todos os produtos associados)",
              default: false
            }
          ]);

          if (resposta.confirmacao) {
            // Primeiro deletamos os produtos associados
            await produtoController.deleteByCategoria(
              { params: { categoriaId: resposta.id } } as any,
              { 
                status: (code: number) => ({ 
                  json: (data: any) => console.log(`\nProdutos da categoria deletados (${code}):`, data) 
                }) 
              } as any
            );

            // Depois deletamos a categoria
            const deleteResponse = await categoriaController.delete(
              { params: { id: resposta.id } } as any,
              { 
                status: (code: number) => ({ 
                  json: (data: any) => console.log(`\nCategoria deletada (${code}):`, data) 
                }) 
              } as any
            );
          } else {
            console.log("\nOperação cancelada.");
          }
        }
      } as any
    );
  } catch (error) {
    console.error("\nErro ao deletar categoria:", error);
  }
}

// Função para listar produtos
async function listarProdutos() {
  try {
    const produtosResponse = await produtoController.getAll(
      {} as any,
      { json: (data: any) => console.log("\nProdutos:", data) } as any
    );
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
  }
}

// Função para criar produto
async function criarProduto() {
  const resposta = await inquirer.prompt([
    { type: "input", name: "nome", message: "Nome do produto:" },
    { type: "input", name: "descricao", message: "Descrição do produto:" },
    { type: "number", name: "preco", message: "Preço:" },
    { type: "number", name: "quantidade", message: "Quantidade:" },
    { type: "number", name: "categoriaId", message: "ID da categoria:" }
  ]);

  try {
    const produtoResponse = await produtoController.create(
      { body: resposta } as any,
      { status: (code: number) => ({ json: (data: any) => console.log(`\nProduto criado (${code}):`, data) }) } as any
    );
  } catch (error) {
    console.error("Erro ao criar produto:", error);
  }
}

// Função para deletar produto
async function deletarProduto() {
  try {
    // Primeiro listamos os produtos para o usuário escolher
    const produtosResponse = await produtoController.getAll(
      {} as any,
      { 
        json: async (produtos: any[]) => {
          if (produtos.length === 0) {
            console.log("\nNão há produtos cadastrados para deletar.");
            return;
          }

          console.log("\nProdutos disponíveis:");
          produtos.forEach(prod => {
            console.log(`ID: ${prod.id} | Nome: ${prod.nome} | Preço: R$${prod.preco}`);
          });

          const resposta = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message: "Digite o ID do produto que deseja deletar:",
              validate: (input) => {
                return !isNaN(input) || "Por favor, digite um número válido";
              }
            },
            {
              type: "confirm",
              name: "confirmacao",
              message: "Tem certeza que deseja deletar este produto?",
              default: false
            }
          ]);

          if (resposta.confirmacao) {
            const deleteResponse = await produtoController.delete(
              { params: { id: resposta.id } } as any,
              { 
                status: (code: number) => ({ 
                  json: (data: any) => console.log(`\nProduto deletado (${code}):`, data) 
                }) 
              } as any
            );
          } else {
            console.log("\nOperação cancelada.");
          }
        }
      } as any
    );
  } catch (error) {
    console.error("\nErro ao deletar produto:", error);
  }
}

startCLI();