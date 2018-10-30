import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import User from './User';
import Ticket from './Ticket';
import Comment from './Comment'
import { Exclude } from 'class-transformer';

@Entity()
export default class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text', { nullable: false })
  name: string;

  @Column('text', { nullable: false })
  description: string;

  @Column('text', { nullable: true })
  pictureUrl: string;

  @Column('date', { nullable: false })
  startDate: string;

  @Column('date', { nullable: false })
  endDate: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(_ => User, user => user.events)
  user: User;

  @OneToMany(_ => Ticket, ticket => ticket.event)
  tickets: Ticket;

  @OneToMany(_ => Comment, comment => comment.event)
  comments: Comment
}
