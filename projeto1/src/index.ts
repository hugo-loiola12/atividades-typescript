import { MainMenu } from "./cli/mainMenu";
import { CategoriaRepository } from "./repositories/CategoriaRepository";
import { ProdutoRepository } from "./repositories/ProdutoRepository";

const categoriaRepo = new CategoriaRepository();
const produtoRepo = new ProdutoRepository(categoriaRepo);
const menu = new MainMenu(categoriaRepo, produtoRepo);

menu.iniciar();
