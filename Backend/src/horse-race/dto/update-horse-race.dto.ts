import { PartialType } from '@nestjs/mapped-types';
import { CreateHorseRaceDto } from './create-horse-race.dto';

export class UpdateHorseRaceDto extends PartialType(CreateHorseRaceDto) {}
