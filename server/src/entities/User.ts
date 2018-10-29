import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { IsEmail, MinLength } from 'class-validator';
import Event from './Event';
import Ticket from './Ticket';
import Comment from './Comment'

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text', { nullable: false })
  firstName: string;

  @Column('text', { nullable: false })
  lastName: string;

  @IsEmail()
  @Column('text', { nullable: false })
  email: string;

  @MinLength(8)
  @Column('text', { nullable: false })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column('text', {default: 'USER'})
  @Exclude()
  roles: string

  @CreateDateColumn({ type: 'timestamp' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Exclude()
  updatedAt: Date;

  @OneToMany(_ => Event, event => event.user)
  events;

  @OneToMany(_ => Ticket, ticket => ticket.user)
  tickets;

  @OneToMany(_ => Comment, comment => comment.user)
  comments;

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10);
    this.password = hash;
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password);
  }
}
