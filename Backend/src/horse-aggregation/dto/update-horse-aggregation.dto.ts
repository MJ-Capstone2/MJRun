import { PartialType } from '@nestjs/mapped-types';
import { CreateHorseAggregationDto } from './create-horse-aggregation.dto';

export class UpdateHorseAggregationDto extends PartialType(CreateHorseAggregationDto) {}
