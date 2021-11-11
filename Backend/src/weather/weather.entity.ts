import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Weather extends BaseEntity {
  @PrimaryColumn({ type: 'int', length: 10 })
  date: number;

  @Column({ type: 'varchar2', length: 10 })
  weather: string;

  @Column({ type: 'varchar2', length: 10 })
  track: string;
}