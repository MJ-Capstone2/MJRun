import { IsDecimal, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Horse } from 'src/horse/entities/horse.entity';
export class CreateHorseAggregationDto {
  @IsInt()
  @IsNotEmpty()
  readonly horse: Horse;
  @IsInt()
  @IsPositive()
  readonly total_race_count: number;
  @IsDecimal()
  @IsNotEmpty()
  readonly total_win_rate: number;
  @IsInt()
  @IsPositive()
  readonly total_ord1_count: number;
  @IsInt()
  @IsPositive()
  readonly total_ord2_count: number;
  @IsInt()
  @IsPositive()
  readonly total_ord3_count: number;
}
