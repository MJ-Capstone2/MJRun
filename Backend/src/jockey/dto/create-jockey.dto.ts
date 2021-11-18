import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateJockeyDto {
  @IsInt()
  @IsNotEmpty()
  readonly jockey_number: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  readonly age: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  readonly career: number;

  @IsInt()
  @IsPositive()
  readonly ord1_total_score: number;

  @IsInt()
  @IsPositive()
  readonly totla_racing_count: number;

  @IsInt()
  @IsPositive()
  readonly ord1_1year_score: number;
}
