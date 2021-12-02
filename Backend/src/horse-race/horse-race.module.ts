import { Module } from '@nestjs/common';
import { HorseRaceService } from './horse-race.service';
import { HorseRaceController } from './horse-race.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorseRaceRepository } from './horse-race.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HorseRaceRepository])],
  controllers: [HorseRaceController],
  providers: [HorseRaceService],
})
export class HorseRaceModule {}
