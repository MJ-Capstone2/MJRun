import { Test, TestingModule } from '@nestjs/testing';
import { HorseController } from './horse.controller';

describe('HorseController', () => {
  let controller: HorseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorseController],
    }).compile();

    controller = module.get<HorseController>(HorseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
