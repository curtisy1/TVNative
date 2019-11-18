import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity
} from "typeorm";

@Entity()
export class Aspect extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ratio: string; // TODO: This is a constant so make it enum or separate table
}
