import { Module } from '@nestjs/common';
import { AIPredictionService } from './aiprediction.service';
import { AIPredictionController } from './aiprediction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AIPredictionRepository } from './aiprediction.repository';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AIPredictionRepository, HorseRaceRepository]),
  ],
  controllers: [AIPredictionController],
  providers: [AIPredictionService],
})
export class AIPredictionModule {}
