import { PartialType } from '@nestjs/mapped-types';
import { CreateAIPredictionDto } from './create-aiprediction.dto';

export class UpdateAIPredictionDto extends PartialType(CreateAIPredictionDto) {}
