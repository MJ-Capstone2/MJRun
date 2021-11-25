import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Administrator')
export class Administrator extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  id: string;

  @Column({ type: 'char', length: 64 })
  password: String;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;
}
