import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
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
  @IsString()
  @IsNotEmpty()
  readonly sex: string;
  @IsString()
  @IsNotEmpty()
  readonly nationality: string;
  @IsInt()
  @IsNotEmpty()
  readonly rating: number;
  @IsDecimal()
  @IsNotEmpty()
  readonly weight: number;
}
