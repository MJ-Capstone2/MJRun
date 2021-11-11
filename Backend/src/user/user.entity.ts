import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'varchar2', length: 20 })
  id: string;

  @Column({ type: 'char', length: 64 })
  password: String;

  @Column({ type: 'varchar2', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar2', length: 20, unique: true })
  nickname: string;
}
