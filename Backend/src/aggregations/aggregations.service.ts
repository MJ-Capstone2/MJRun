import { Injectable } from '@nestjs/common';
import { HorseAggregationService } from 'src/horse-aggregation/horse-aggregation.service';
import { JockeyAggregationService } from 'src/jockey-aggregation/jockey-aggregation.service';
import { TrainerAggregationService } from 'src/trainer-aggregation/trainer-aggregation.service';

@Injectable()
export class AggregationsService {
  constructor(
    private horseAS: HorseAggregationService,
    private jockeyAS: JockeyAggregationService,
    private trainerAS: TrainerAggregationService,
  ) {}

  async syncAggregation(ra_id: number) {}
}
