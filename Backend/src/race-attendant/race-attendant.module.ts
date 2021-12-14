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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RaceAttendantRepository,
      HorseRaceRepository,
      HorseRepository,
      JockeyRepository,
      TrainerRepository,
    ]),
  ],
  controllers: [RaceAttendantController],
  providers: [RaceAttendantService, HorseRaceService],
  exports: [RaceAttendantService],
})
export class RaceAttendantModule {}
