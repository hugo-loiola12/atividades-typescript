import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from "./Categoria";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column("decimal")
    preco: number;

    @Column("int")
    quantidade: number;

    @ManyToOne(() => Categoria)
    @JoinColumn({ name: "categoriaId" })
    categoria: Categoria;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    dataAtualizacao: Date;
}
