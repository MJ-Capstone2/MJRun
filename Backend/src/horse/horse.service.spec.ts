import { Test, TestingModule } from '@nestjs/testing';
import { HorseService } from './horse.service';

describe('HorseService', () => {
  let service: HorseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorseService],
    }).compile();

    service = module.get<HorseService>(HorseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
