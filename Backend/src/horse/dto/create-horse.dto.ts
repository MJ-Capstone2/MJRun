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
  @IsInt()
  @IsNotEmpty()
  readonly rating: number;
  @IsDecimal()
  @IsNotEmpty()
  readonly weight: number;
}
