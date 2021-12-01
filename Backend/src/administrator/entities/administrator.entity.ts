import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity('Administrator')
@Unique(['email'])
export class Administrator extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  id: string;

  @Column({ type: 'char', length: 64 })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;
}
