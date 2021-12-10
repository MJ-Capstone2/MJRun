import { Module } from '@nestjs/common';
import { AIPredictionService } from './aiprediction.service';
import { AIPredictionController } from './aiprediction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AIPredictionRepository } from './aiprediction.repository';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';
import { RaceAttendantModule } from 'src/race-attendant/race-attendant.module';
import { RaceAttendantRepository } from 'src/race-attendant/race-attendant.repository';
import { RaceAttendantService } from 'src/race-attendant/race-attendant.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AIPredictionRepository,
      HorseRaceRepository,
      RaceAttendantRepository,
    ]),
    RaceAttendantModule,
  ],
  controllers: [AIPredictionController],
  providers: [AIPredictionService, RaceAttendantService],
})
export class AIPredictionModule {}
