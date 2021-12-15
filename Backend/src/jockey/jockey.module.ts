import { Module } from '@nestjs/common';
import { JockeyService } from './jockey.service';
import { JockeyController } from './jockey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JockeyRepository } from './jockey.repository';
import { JockeyAggregationModule } from 'src/jockey-aggregation/jockey-aggregation.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JockeyRepository]),
    JockeyAggregationModule,
  ],
  controllers: [JockeyController],
  providers: [JockeyService],
})
export class JockeyModule {}
