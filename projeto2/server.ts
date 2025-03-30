import express from "express";
import cors from "cors";
import { AppDataSource } from "./src/data-source";
import { CategoriaService } from "./src/services/CategoriaService";
import { ProdutoService } from "./src/services/ProdutoService";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/categorias", async (req, res) => {
    const categoria = await CategoriaService.criar(req.body.nome, req.body.descricao);
    res.json(categoria);
});

app.get("/categorias", async (req, res) => {
    const categorias = await CategoriaService.listar();
    res.json(categorias);
});

app.post("/produtos", async (req, res) => {
    const produto = await ProdutoService.criar(req.body.nome, req.body.descricao, req.body.preco, req.body.quantidade, req.body.categoriaId);
    res.json(produto);
});

app.get("/produtos", async (req, res) => {
    const produtos = await ProdutoService.listar();
    res.json(produtos);
});

AppDataSource.initialize().then(() => {
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});
