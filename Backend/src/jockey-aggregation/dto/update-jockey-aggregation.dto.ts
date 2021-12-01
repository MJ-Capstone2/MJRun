import { PartialType } from '@nestjs/mapped-types';
import { CreateJockeyAggregationDto } from './create-jockey-aggregation.dto';

export class UpdateJockeyAggregationDto extends PartialType(CreateJockeyAggregationDto) {}
