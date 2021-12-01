import { HorseRace } from 'src/horse-race/entities/horse-race.entity';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('AIPrediction')
export class AIPrediction extends BaseEntity {
  @OneToOne(() => HorseRace, {
    primary: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id' })
  horseRace: HorseRace;

  @Column()
  first_linenumber: number;
  @Column()
  second_linenumber: number;
  @Column()
  third_linenumber: number;
}
