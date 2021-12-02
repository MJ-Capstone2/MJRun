import { IsInt, IsNotEmpty } from 'class-validator';
import { HorseRace } from 'src/horse-race/entities/horse-race.entity';

export class CreateAIPredictionDto {
  @IsInt()
  @IsNotEmpty()
  readonly horseRace: HorseRace;
  @IsInt()
  @IsNotEmpty()
  readonly first_linenumber: number;
  @IsInt()
  @IsNotEmpty()
  readonly second_linenumber: number;
  @IsInt()
  @IsNotEmpty()
  readonly third_linenumber: number;
}
