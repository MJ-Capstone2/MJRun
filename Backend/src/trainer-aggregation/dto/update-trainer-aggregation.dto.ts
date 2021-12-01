import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainerAggregationDto } from './create-trainer-aggregation.dto';

export class UpdateTrainerAggregationDto extends PartialType(CreateTrainerAggregationDto) {}
