import { Module } from '@nestjs/common';
import { RaceInfoService } from './race-info.service';
import { RaceInfoController } from './race-info.controller';

@Module({
  controllers: [RaceInfoController],
  providers: [RaceInfoService]
})
export class RaceInfoModule {}
