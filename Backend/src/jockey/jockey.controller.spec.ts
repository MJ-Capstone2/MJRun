import { Test, TestingModule } from '@nestjs/testing';
import { JockeyController } from './jockey.controller';

describe('JockeyController', () => {
  let controller: JockeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JockeyController],
    }).compile();

    controller = module.get<JockeyController>(JockeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
