import { Module } from '@nestjs/common';
import { HorseAggregationService } from './horse-aggregation.service';
import { HorseAggregationController } from './horse-aggregation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorseAggregationRepository } from './horse-aggregation.repository';
import { HorseService } from 'src/horse/horse.service';
import { HorseRepository } from 'src/horse/horse.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HorseAggregationRepository, HorseRepository]),
  ],
  controllers: [HorseAggregationController],
  providers: [HorseAggregationService, HorseService],
})
export class HorseAggregationModule {}
