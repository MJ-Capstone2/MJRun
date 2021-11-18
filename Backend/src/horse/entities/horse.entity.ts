import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Horse')
export class Horse extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  horse_number: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'tinyint' })
  age: number;

  @Column({ type: 'tinyint' })
  sex: number;

  @Column({ type: 'char', length: 4 })
  nationality: string;

  @Column({ type: 'varchar', length: 10 })
  grade: string;

  @Column({ type: 'float' })
  weight: number;

  @Column({ type: 'int' })
  ord1_total_score: number;

  @Column({ type: 'float' })
  total_win_rate: number;

  @Column({ type: 'float' })
  total_double_win_rate: number;

  @Column({ type: 'int' })
  total_prize_money: number;

  @Column({ type: 'int' })
  recent_1year_prize_money: number;
}
