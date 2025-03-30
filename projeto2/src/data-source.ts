import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categoria } from "./entities/Categoria";
import { Produto } from "./entities/Produto";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "inventario.db",
    synchronize: true,
    logging: false,
    entities: [Categoria, Produto],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error) => console.log(error));
