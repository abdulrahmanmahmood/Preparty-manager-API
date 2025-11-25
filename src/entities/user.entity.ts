import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: String;

  @Column()
  firstName: String;

  @Column()
  lastName: String;

  @Column()
  email: String;

  @Column()
  avatarUrl: String;

  @CreateDateColumn()
  createdAt: Date;

  // @ OneToMany()
  properties: Property[];
}
