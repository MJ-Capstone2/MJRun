import { Module } from '@nestjs/common';
import { HorseService } from './horse.service';
import { HorseController } from './horse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorseRepository } from './horse.repository';
import { HorseAggregationModule } from 'src/horse-aggregation/horse-aggregation.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([HorseRepository]),
    HorseAggregationModule,
  ],
  controllers: [HorseController],
  providers: [HorseService],
})
export class HorseModule {}
