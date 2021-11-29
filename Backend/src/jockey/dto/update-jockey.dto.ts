import { PartialType } from '@nestjs/mapped-types';
import { CreateJockeyDto } from './create-jockey.dto';

export class UpdateJockeyDto extends PartialType(CreateJockeyDto) {}
