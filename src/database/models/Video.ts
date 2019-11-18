import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Aspect } from "./Aspect";

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  aspects: Aspect[]; // TODO: What the heck is this again?
}
