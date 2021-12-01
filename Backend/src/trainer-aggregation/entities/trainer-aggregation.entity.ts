import { Trainer } from 'src/trainer/entities/trainer.entity';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('TrainerAggregation')
export class TrainerAggregation extends BaseEntity {
  @OneToOne(() => Trainer, {
    primary: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'jk_id' })
  trainer: Trainer;

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
