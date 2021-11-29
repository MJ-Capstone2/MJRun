import { Test, TestingModule } from '@nestjs/testing';
import { HorseAggregationController } from './horse-aggregation.controller';
import { HorseAggregationService } from './horse-aggregation.service';

describe('HorseAggregationController', () => {
  let controller: HorseAggregationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorseAggregationController],
      providers: [HorseAggregationService],
    }).compile();

    controller = module.get<HorseAggregationController>(HorseAggregationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
