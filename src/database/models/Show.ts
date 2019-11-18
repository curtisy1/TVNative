import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  ManyToMany,
  OneToMany
} from "typeorm";
import { Title } from "./Title";
import { Video } from "./Video";
import { Credit } from "./Credit";
import { Subtitle } from "./Subtitle";
import { Description } from "./Description";
import { Country } from "./Country";
import { Category } from "./Category";
import { Channel } from "./Channel";

@Entity()
export class Show extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startTime: Date;

  @Column()
  stopTime: Date;

  @Column()
  isNew: boolean;

  @Column()
  date: Date;

  @Column()
  episodeNumber: number;

  @Column()
  url: string[]; // TODO: Probably need to move this into separate entity

  @OneToOne(type => Title)
  @JoinColumn()
  title: Title;

  @OneToOne(type => Video)
  @JoinColumn()
  video: Video;

  @OneToOne(type => Credit)
  @JoinColumn()
  credit: Credit;

  @OneToOne(type => Subtitle)
  @JoinColumn()
  subtitle: Subtitle;

  @OneToOne(type => Description)
  @JoinColumn()
  description: Description; // TODO: This is a string?!

  @OneToMany(
    type => Channel,
    channel => channel.show
  )
  channels: Channel[];

  @ManyToMany(type => Category)
  @JoinColumn()
  categories: Category[];

  @ManyToMany(type => Country)
  @JoinColumn()
  countries: Country[];
}
