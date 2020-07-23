import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne,
} from 'typeorm';

import User from './user.entity';

@Entity({ name: 'messages' })
class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => User, user => user.id)
  author_id: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Message;
