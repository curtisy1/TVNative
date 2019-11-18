import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { Role } from "./Role";

@Entity()
export class Cast extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text", {
    nullable: true
  })
  roleName: string;

  @ManyToOne(
    type => Role,
    role => role.casts
  )
  role: Role;
}
