import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany
} from "typeorm";
import { Language } from "./Language";

@Entity()
export class Subtitle extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(type => Language)
  languages: Language[];
}
