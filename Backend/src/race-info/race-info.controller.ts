import { Controller } from '@nestjs/common';
import { RaceInfoService } from './race-info.service';

@Controller('race-info')
export class RaceInfoController {
  constructor(private readonly raceInfoService: RaceInfoService) {}
}
