import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
export class CreateHorseDto {
  @IsInt()
  @IsNotEmpty()
  readonly horse_number: number;
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly name: string;
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly age: number;
  @IsInt()
  @Min(0)
  @Max(1)
  @IsNotEmpty()
  readonly sex: number;
  @IsString()
  @IsNotEmpty()
  readonly nationality: string;
  @IsString()
  @IsNotEmpty()
  readonly grade: string;
  @IsDecimal()
  @IsNotEmpty()
  readonly weight: number;
  @IsInt()
  @IsPositive()
  readonly ord1_total_score: number;
  @IsDecimal()
  @IsNotEmpty()
  readonly total_win_rate: number;
  @IsDecimal()
  @IsNotEmpty()
  readonly total_double_win_rate: number;
  @IsInt()
  @IsPositive()
  readonly total_prize_money: number;
  @IsDecimal()
  @IsPositive()
  readonly recent_1year_prize_money: number;
}
