import { Test, TestingModule } from '@nestjs/testing';
import { RaceresultController } from './raceresult.controller';

describe('RaceresultController', () => {
  let controller: RaceresultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaceresultController],
    }).compile();

    controller = module.get<RaceresultController>(RaceresultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
