import express from "express";
import cors from "cors";
import { AppDataSource } from "./src/database/AppDataSource";
import {CategoriaController} from "./src/controllers/categoria.controller";
import {ProdutoController} from "./src/controllers/produto.controller";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/categorias", async (req, res) => {
    const categoria = await CategoriaController.criar(req.body.nome, req.body.descricao);
    res.json(categoria);
});

app.get("/categorias", async (req, res) => {
    const categorias = await CategoriaController.listar();
    res.json(categorias);
});

app.post("/produtos", async (req, res) => {
    const produto = await ProdutoController.criar(req.body.nome, req.body.descricao, req.body.preco, req.body.quantidade, req.body.categoriaId);
    res.json(produto);
});

app.get("/produtos", async (req, res) => {
    const produtos = await ProdutoController.listar();
    res.json(produtos);
});

AppDataSource.initialize().then(() => {
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});
