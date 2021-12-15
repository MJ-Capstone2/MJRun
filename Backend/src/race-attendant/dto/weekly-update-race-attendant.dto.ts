import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class WeeklyUpdateRaceAttendantDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  line_number: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  race_id: number;

  @IsInt()
  @IsNotEmpty()
  HR_NO: number;

  @IsInt()
  @IsNotEmpty()
  JK_NO: number;

  @IsInt()
  @IsNotEmpty()
  TR_NO: number;
}
