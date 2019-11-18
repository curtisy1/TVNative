import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Settings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  darkModeEnabled: boolean;

  @Column()
  downloadInterval: number;

  @Column()
  onlyUseWifi: boolean;
}
