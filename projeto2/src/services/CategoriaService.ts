import { CategoriaRepository } from "../repositories/CategoriaRepository";
import { Categoria } from "../entities/Categoria";

export class CategoriaService {
    static async criar(nome: string, descricao: string) {
        const categoria = CategoriaRepository.create({ nome, descricao });
        await CategoriaRepository.save(categoria);
        return categoria;
    }

    static async listar() {
        return await CategoriaRepository.find();
    }
}
