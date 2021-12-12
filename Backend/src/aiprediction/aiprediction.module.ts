import { Module } from '@nestjs/common';
import { AIPredictionService } from './aiprediction.service';
import { AIPredictionController } from './aiprediction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AIPredictionRepository } from './aiprediction.repository';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';
import { RaceAttendantModule } from 'src/race-attendant/race-attendant.module';
import { RaceAttendantRepository } from 'src/race-attendant/race-attendant.repository';
import { RaceAttendantService } from 'src/race-attendant/race-attendant.service';
<<<<<<< HEAD
import { HttpModule } from '@nestjs/axios';
=======
>>>>>>> 8ec544dc06d2759b70140cb5e610a46c4d13a20f

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AIPredictionRepository,
      HorseRaceRepository,
      RaceAttendantRepository,
    ]),
    RaceAttendantModule,
<<<<<<< HEAD
    HttpModule,
=======
>>>>>>> 8ec544dc06d2759b70140cb5e610a46c4d13a20f
  ],
  controllers: [AIPredictionController],
  providers: [AIPredictionService, RaceAttendantService],
})
export class AIPredictionModule {}
