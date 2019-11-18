import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { Show } from "./Show";

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string; // TODO: Those should be in a separate table?

  @ManyToOne(
    type => Show,
    show => show.channels
  )
  show: Show;
}
