import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "./Produto";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @Column({ type: "varchar", length: 500 })
  descricao!: string;

  // Alteração: usa "datetime" para SQLite
  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  dataCriacao!: Date;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos!: Produto[];
}
