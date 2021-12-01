import { Test, TestingModule } from '@nestjs/testing';
import { TrainerAggregationController } from './trainer-aggregation.controller';
import { TrainerAggregationService } from './trainer-aggregation.service';

describe('TrainerAggregationController', () => {
  let controller: TrainerAggregationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainerAggregationController],
      providers: [TrainerAggregationService],
    }).compile();

    controller = module.get<TrainerAggregationController>(TrainerAggregationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
