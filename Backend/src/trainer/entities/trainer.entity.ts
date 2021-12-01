import { RaceAttendant } from 'src/race-attendant/entities/race-attendant.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('Trainer')
export class Trainer extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  tr_id: number;

  @Column({ type: 'varchar', length: 10 })
  name: string;

  @Column({ type: 'int' })
  debut: number;

  @Column({ type: 'int' })
  birthdate: number;

  @OneToMany(() => RaceAttendant, (raceAttendant) => raceAttendant.trainer)
  races: RaceAttendant[];
}
