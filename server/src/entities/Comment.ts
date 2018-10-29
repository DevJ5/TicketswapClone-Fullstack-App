import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import User from './User';
import Event from './Event';
import Ticket from './Ticket';
import { Exclude } from 'class-transformer';

@Entity()
export default class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text', { nullable: false })
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(_ => User, user => user.comments)
  user: User;

  @ManyToOne(_ => Event, event => event.comments, { onDelete: 'CASCADE' })
  event: Event;

  @ManyToOne(_ => Ticket, ticket => ticket.comments, { onDelete: 'CASCADE' })
  ticket: Ticket;
}
