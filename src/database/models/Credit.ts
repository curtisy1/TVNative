import { Cast } from "./Cast";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany
} from "typeorm";

// TODO: Was I on drugs when writing this?
@Entity()
export class Credit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Cast)
  director: Cast[];

  @ManyToMany(type => Cast)
  actor: Cast[];
}
