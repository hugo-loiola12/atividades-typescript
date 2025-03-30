import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "./Categoria";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @Column({ type: "varchar", length: 500 })
  descricao!: string;

  @Column({ type: "decimal" })
  preco!: number;

  @Column({ type: "int" })
  quantidade!: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
  categoria!: Categoria;

  @CreateDateColumn({ type: "datetime" })
  dataCriacao!: Date;

  @UpdateDateColumn({ type: "datetime" })
  dataAtualizacao!: Date;
}
