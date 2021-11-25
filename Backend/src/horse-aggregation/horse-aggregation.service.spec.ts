import { Test, TestingModule } from '@nestjs/testing';
import { HorseAggregationService } from './horse-aggregation.service';

describe('HorseAggregationService', () => {
  let service: HorseAggregationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorseAggregationService],
    }).compile();

    service = module.get<HorseAggregationService>(HorseAggregationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
