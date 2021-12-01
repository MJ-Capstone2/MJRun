import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateJockeyDto {
  @IsInt()
  @IsNotEmpty()
  readonly jk_id: number;

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
