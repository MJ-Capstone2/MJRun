import { Test, TestingModule } from '@nestjs/testing';
import { HorseRaceService } from './horse-race.service';

describe('HorseRaceService', () => {
  let service: HorseRaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorseRaceService],
    }).compile();

    service = module.get<HorseRaceService>(HorseRaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
