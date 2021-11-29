import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Trainer extends BaseEntity {
  @PrimaryColumn({ type: 'int', length: 20 })
  number: number;

  @Column({ type: 'varchar2', length: 10 })
  name: string;

  @Column({ type: 'tinyint', length: 2 })
  age: number;

  @Column({ type: 'int', length: 8 })
  career: number;

  @Column({ type: 'int', length: 8 })
  total_score: number;

  @Column({ type: 'int', length: 8 })
  recent_score: number;

  @Column({ type: 'float', length: 4 })
  total_win_rate: number;

  @Column({ type: 'float', length: 4 })
  recent_win_rate: number;

  @Column({ type: 'tinyint', length: 2})
  recent_1year_ranking: number;

  @Column({ type: 'tinyint', length: 1})
  division_num: string;
}
