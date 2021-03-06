import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import User from "./User";
import Event from "./Event";
import Comment from "./Comment";
import { Exclude } from "class-transformer";

@Entity()
export default class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("integer", { nullable: false })
  price: number;

  @Column("text", { nullable: false })
  description: string;

  @Column("text", {
    nullable: true,
    default: "https://www.wwkd.org/wp-content/uploads/2018/08/tickets.png"
  })
  pictureUrl: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Exclude()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @ManyToOne(_ => User, user => user.tickets) // {eager: true}
  user: User;

  @ManyToOne(_ => Event, event => event.tickets, { onDelete: "CASCADE" })
  event: Event;

  @OneToMany(_ => Comment, comment => comment.ticket)
  comments: Comment;
}
