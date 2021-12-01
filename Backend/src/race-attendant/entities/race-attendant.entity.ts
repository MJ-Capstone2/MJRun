import { HorseRace } from 'src/horse-race/entities/horse-race.entity';
import { Horse } from 'src/horse/entities/horse.entity';
import { Jockey } from 'src/jockey/entities/jockey.entity';
import { Trainer } from 'src/trainer/entities/trainer.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('RaceAttendant')
export class RaceAttendant extends BaseEntity {
  @PrimaryColumn({ type: 'bigint' })
  ra_id: number;

  @Column({ type: 'int' })
  line_number: number;

  @ManyToOne(() => HorseRace, (horseRace) => horseRace.attendants, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'race_id' })
  horseRace: HorseRace;

  @ManyToOne(() => Horse, (horse) => horse.races)
  @JoinColumn({ name: 'horse_id' })
  horse: Horse;

  @ManyToOne(() => Jockey, (jockey) => jockey.races)
  @JoinColumn({ name: 'jockey_id' })
  jockey: Jockey;

  @ManyToOne(() => Trainer, (trainer) => trainer.races)
  @JoinColumn({ name: 'trainer_id' })
  trainer: Trainer;

  @Column({ type: 'int', nullable: true })
  result: number;
}
