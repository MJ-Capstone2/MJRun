import { Module } from '@nestjs/common';
import { HorseRaceService } from './horse-race.service';
import { HorseRaceController } from './horse-race.controller';

@Module({
  controllers: [HorseRaceController],
  providers: [HorseRaceService],
})
export class HorseRaceModule {}
