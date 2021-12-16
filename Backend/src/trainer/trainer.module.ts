import { Module } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { TrainerController } from './trainer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerRepository } from './trainer.repository';
import { TrainerAggregationModule } from 'src/trainer-aggregation/trainer-aggregation.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrainerRepository]),
    TrainerAggregationModule,
  ],
  controllers: [TrainerController],
  providers: [TrainerService],
  exports: [TrainerService],
})
export class TrainerModule {}
