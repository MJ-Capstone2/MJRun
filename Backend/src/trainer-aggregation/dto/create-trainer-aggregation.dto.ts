import { IsDecimal, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Trainer } from 'src/trainer/entities/trainer.entity';
export class CreateTrainerAggregationDto {
  @IsInt()
  @IsNotEmpty()
  readonly trainer: Trainer;
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
