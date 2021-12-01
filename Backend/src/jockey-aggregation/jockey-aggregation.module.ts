import { Module } from '@nestjs/common';
import { JockeyAggregationService } from './jockey-aggregation.service';
import { JockeyAggregationController } from './jockey-aggregation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JockeyRepository } from 'src/jockey/jockey.repository';
import { JockeyAggregationRepository } from './jockey-aggregation.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([JockeyRepository, JockeyAggregationRepository]),
  ],
  controllers: [JockeyAggregationController],
  providers: [JockeyAggregationService],
})
export class JockeyAggregationModule {}
