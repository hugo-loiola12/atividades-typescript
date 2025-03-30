import { AppDataSource } from "../data-source";
import { Produto } from "../entities/Produto";

export const ProdutoRepository = AppDataSource.getRepository(Produto);
