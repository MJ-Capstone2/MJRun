import { RaceAttendant } from 'src/race-attendant/entities/race-attendant.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('Horse')
export class Horse extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  horse_number: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'tinyint' })
  age: number;

  @Column({ type: 'char', length: 4 })
  sex: string;

  @Column({ type: 'char', length: 20 })
  nationality: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'int' })
  weight: number;

  @OneToMany(() => RaceAttendant, (raceattendant) => raceattendant.horse)
  races: RaceAttendant[];
}
