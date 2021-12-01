import { RaceAttendant } from 'src/race-attendant/entities/race-attendant.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('HorseRace')
export class HorseRace extends BaseEntity {
  @PrimaryColumn({ type: 'bigint' })
  race_id: number;

  @Column({ type: 'int' })
  race_date: number;

  @Column({ type: 'varchar', length: 15 })
  race_location: string;

  @Column({ type: 'tinyint' })
  race_number: number;

  @Column({ type: 'time' })
  race_start_time: Date;

  @Column({ type: 'int' })
  race_distance: number;

  @OneToMany(() => RaceAttendant, (raceattendant) => raceattendant.horseRace)
  attendants: RaceAttendant[];
}
