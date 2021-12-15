import { PartialType } from '@nestjs/mapped-types';
import { CreateRaceAttendantDto } from './create-race-attendant.dto';

export class UpdateRaceAttendantDto extends PartialType(
  CreateRaceAttendantDto,
) {}
