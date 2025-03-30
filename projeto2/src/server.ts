import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categoria.routes";
import produtoRoutes from "./routes/produto.routes";
import { AppDataSource } from "./database/AppDataSource";

// Inicializa a conexão com o banco (AppDataSource já se conecta automaticamente)
const app = express();

app.use(cors());
app.use(express.json());

app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
