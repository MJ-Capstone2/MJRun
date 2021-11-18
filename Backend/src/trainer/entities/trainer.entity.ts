import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Trainer')
export class Trainer extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  trainer_number: number;

  @Column({ type: 'varchar', length: 10 })
  name: string;

  @Column({ type: 'int' })
  career: number;

  @Column({ type: 'int' })
  ord1_total_score: number;

  @Column({ type: 'float' })
  total_win_rate: number;

  @Column({ type: 'float' })
  total_double_win_rate: number;

  @Column({ type: 'int' })
  total_racing_count: number;
}
