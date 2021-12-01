import { Test, TestingModule } from '@nestjs/testing';
import { TrainerAggregationService } from './trainer-aggregation.service';

describe('TrainerAggregationService', () => {
  let service: TrainerAggregationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainerAggregationService],
    }).compile();

    service = module.get<TrainerAggregationService>(TrainerAggregationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
