import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('User')
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  user_id: string;

  @Column({ type: 'char', length: 64 })
  password: String;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  nickname: string;
}
