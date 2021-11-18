import { Test, TestingModule } from '@nestjs/testing';
import { JockeyService } from './jockey.service';

describe('JockeyService', () => {
  let service: JockeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JockeyService],
    }).compile();

    service = module.get<JockeyService>(JockeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
