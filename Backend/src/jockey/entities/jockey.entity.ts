import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Jockey')
export class Jockey extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  jk_id: number;

  @Column({ length: 10 })
  name: string;

  @Column({ type: 'int' })
  debut: number;

  @Column({ type: 'int' })
  birthdate: number;
}
