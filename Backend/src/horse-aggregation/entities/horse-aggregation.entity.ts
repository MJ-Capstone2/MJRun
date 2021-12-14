import { Horse } from 'src/horse/entities/horse.entity';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('HorseAggregation')
export class HorseAggregation extends BaseEntity {
  @OneToOne(() => Horse, {
    primary: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'horse_number' })
  horse: Horse;

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

  public serializeHorse() {
    Object.assign(this, this.horse);
    delete this.horse;
    return this;
  }
}
