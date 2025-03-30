import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categoria } from "../entities/Categoria";
import { Produto } from "../entities/Produto";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "inventario.db",
  synchronize: true, // ou false se você usar migrations
  logging: false,
  entities: [Categoria, Produto],
  migrations: ["src/migrations/*.ts"],
  subscribers: []
});

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Banco de dados conectado com sucesso!");
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  });
