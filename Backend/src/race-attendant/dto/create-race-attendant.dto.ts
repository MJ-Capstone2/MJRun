import { IsInt, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { HorseRace } from 'src/horse-race/entities/horse-race.entity';
import { Horse } from 'src/horse/entities/horse.entity';
import { Jockey } from 'src/jockey/entities/jockey.entity';
import { Trainer } from 'src/trainer/entities/trainer.entity';

export class CreateRaceAttendantDto {
  @IsInt()
  @IsOptional()
  ra_id: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  line_number: number;

  @IsInt()
  @IsNotEmpty()
  horseRace: HorseRace;

  @IsInt()
  @IsNotEmpty()
  horse: Horse;

  @IsInt()
  @IsNotEmpty()
  jockey: Jockey;

  @IsInt()
  @IsNotEmpty()
  trainer: Trainer;

  @IsInt()
  @IsPositive()
  @IsOptional()
  result: number;
}
