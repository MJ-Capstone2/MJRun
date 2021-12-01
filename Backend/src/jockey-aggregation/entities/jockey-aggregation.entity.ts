import { Jockey } from 'src/jockey/entities/jockey.entity';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('JockeyAggregation')
export class JockeyAggregation extends BaseEntity {
  @OneToOne(() => Jockey, {
    primary: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'jk_id' })
  jockey: Jockey;

  @Column({ type: 'int' })
  total_race_count: number;

  @Column({ type: 'float' })
  total_win_rate: number;

  @Column({ type: 'int' })
  total_ord1_count: number;

  @Column({ type: 'int' })
  total_ord2_count: number;

  @Column({ type: 'int' })
  total_ord3_count: number;
}
