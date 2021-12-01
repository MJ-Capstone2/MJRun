import { Test, TestingModule } from '@nestjs/testing';
import { JockeyAggregationController } from './jockey-aggregation.controller';
import { JockeyAggregationService } from './jockey-aggregation.service';

describe('JockeyAggregationController', () => {
  let controller: JockeyAggregationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JockeyAggregationController],
      providers: [JockeyAggregationService],
    }).compile();

    controller = module.get<JockeyAggregationController>(JockeyAggregationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
