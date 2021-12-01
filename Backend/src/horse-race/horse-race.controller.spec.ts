import { Test, TestingModule } from '@nestjs/testing';
import { HorseRaceController } from './horse-race.controller';
import { HorseRaceService } from './horse-race.service';

describe('HorseRaceController', () => {
  let controller: HorseRaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorseRaceController],
      providers: [HorseRaceService],
    }).compile();

    controller = module.get<HorseRaceController>(HorseRaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
