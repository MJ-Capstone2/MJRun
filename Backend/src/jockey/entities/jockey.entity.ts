import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Jockey')
export class Jockey extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  jockey_number: number;

  @Column({ type: 'varchar', length: 10 })
  name: string;

  @Column({ type: 'tinyint' })
  age: number;

  @Column({ type: 'int' })
  career: number;

  @Column({ type: 'int' })
  ord1_total_score: number;

  @Column({ type: 'int' })
  total_racing_count: number;

  @Column({ type: 'int' })
  ord1_1year_score: number;
}
