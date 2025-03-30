import { AppDataSource } from "../data-source";
import { Categoria } from "../entities/Categoria";

export const CategoriaRepository = AppDataSource.getRepository(Categoria);
