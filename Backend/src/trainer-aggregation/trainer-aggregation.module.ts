import { Module } from '@nestjs/common';
import { TrainerAggregationService } from './trainer-aggregation.service';
import { TrainerAggregationController } from './trainer-aggregation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerRepository } from 'src/trainer/trainer.repository';
import { TrainerAggregationRepository } from './trainer-aggregation.repository';
import { TrainerService } from 'src/trainer/trainer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrainerRepository, TrainerAggregationRepository]),
  ],
  controllers: [TrainerAggregationController],
  providers: [TrainerAggregationService, TrainerService],
  exports: [TrainerAggregationService],
})
export class TrainerAggregationModule {}
