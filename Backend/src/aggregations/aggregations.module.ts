import { Module } from '@nestjs/common';
import { HorseAggregationModule } from 'src/horse-aggregation/horse-aggregation.module';
import { JockeyAggregationModule } from 'src/jockey-aggregation/jockey-aggregation.module';
import { TrainerAggregationModule } from 'src/trainer-aggregation/trainer-aggregation.module';
import { AggregationsService } from './aggregations.service';

@Module({
  imports: [
    HorseAggregationModule,
    JockeyAggregationModule,
    TrainerAggregationModule,
  ],
  providers: [AggregationsService],
  exports: [AggregationsService],
})
export class AggregationsModule {}
