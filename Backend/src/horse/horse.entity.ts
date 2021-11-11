import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Horse extends BaseEntity {
  @PrimaryColumn({ type: 'int', length: 20 })
  number: number;

  @Column({ type: 'varchar2', length: 20 })
  name: string;

  @Column({ type: 'tinyint', length: 2 })
  age: number;

  @Column({ type: 'tinyint', length: 1 })
  sex: number;

  @Column({ type: 'char', length: 4 })
  nationality: string;

  @Column({ type: 'varchar2', length: 10 })
  grade: string;

  @Column({ type: 'int', length: 8 })
  total_score: number;

  @Column({ type: 'int', length: 8 })
  recent_score: number;

  @Column({ type: 'float', length: 4 })
  total_double_win_rate: number;

  @Column({ type: 'float', length: 4 })
  recent_double_win_rate: number;

  @Column({ type: 'int', length: 16 })
  total_prize_money: number;

  @Column({ type: 'int', length: 16 })
  recent_1year_prize_money: number;

  @Column({ type: 'tinyint', length: 2})
  recent_1year_ranking: number;

  @Column({ type: 'tinyint', length: 1})
  division_num: string;
}