import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateHorseRaceDto {
  @IsInt()
  @IsNotEmpty()
  readonly race_id: number;
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly race_date: number;
  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  readonly race_location: string;
  @IsInt()
  @IsNotEmpty()
  readonly race_number: number;
  @IsDate()
  @IsNotEmpty()
  readonly race_start_titme: Date;
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly race_distance: number;
}
