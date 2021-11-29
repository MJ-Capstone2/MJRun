import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateTrainerDto {
  @IsInt()
  @IsNotEmpty()
  readonly trainer_number: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  readonly career: number;

  @IsInt()
  @IsPositive()
  readonly ord1_total_score: number;

  @IsDecimal()
  readonly total_win_rate: number;

  @IsDecimal()
  readonly total_double_win_rate: number;

  @IsInt()
  @IsPositive()
  readonly total_racing_count: number;
}
