import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao: Date;
}
