import { IsDecimal, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Trainer } from 'src/trainer/entities/trainer.entity';
export class CreateTrainerAggregationDto {
  @IsInt()
  @IsNotEmpty()
  readonly trainer: Trainer;
  @IsInt()
  @IsPositive()
  readonly total_race_count: number;
  @IsInt()
  @IsPositive()
  readonly year_race_count: number;
  @IsDecimal()
  @IsNotEmpty()
  readonly total_win_rate: number;
  @IsDecimal()
  @IsNotEmpty()
  readonly year_win_rate: number;
  @IsInt()
  @IsPositive()
  readonly total_ord1_count: number;
  @IsDecimal()
  @IsPositive()
  readonly year_ord1_count: number;
}
