import { Module } from '@nestjs/common';
import { RaceAttendantService } from './race-attendant.service';
import { RaceAttendantController } from './race-attendant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceAttendantRepository } from './race-attendant.repository';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';
import { HorseRepository } from 'src/horse/horse.repository';
import { JockeyRepository } from 'src/jockey/jockey.repository';
import { TrainerRepository } from 'src/trainer/trainer.repository';
import { HorseRaceService } from 'src/horse-race/horse-race.service';
import { HorseAggregationModule } from 'src/horse-aggregation/horse-aggregation.module';
import { JockeyAggregationModule } from 'src/jockey-aggregation/jockey-aggregation.module';
import { TrainerAggregationModule } from 'src/trainer-aggregation/trainer-aggregation.module';
import { HttpModule } from '@nestjs/axios';
// import { AIPredictionModule } from 'src/aiprediction/aiprediction.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RaceAttendantRepository,
      HorseRaceRepository,
      HorseRepository,
      JockeyRepository,
      TrainerRepository,
    ]),
    HorseAggregationModule,
    JockeyAggregationModule,
    TrainerAggregationModule,
    HttpModule,
  ],
  controllers: [RaceAttendantController],
  providers: [RaceAttendantService, HorseRaceService],
  exports: [RaceAttendantService],
})
export class RaceAttendantModule {}
