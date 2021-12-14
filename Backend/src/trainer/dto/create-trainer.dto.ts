import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateTrainerDto {
  @IsInt()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  readonly debut: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  readonly birthdate: number;
}
