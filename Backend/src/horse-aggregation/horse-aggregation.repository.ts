import { EntityRepository, Repository } from 'typeorm';
import { CreateHorseAggregationDto } from './dto/create-horse-aggregation.dto';
import { HorseAggregation } from './entities/horse-aggregation.entity';

@EntityRepository(HorseAggregation)
export class HorseAggregationRepository extends Repository<HorseAggregation> {
  async createHorseAggregation(
    createHorseAggregationDto: CreateHorseAggregationDto,
  ): Promise<HorseAggregation> {
    const newHorseAggregation = this.create({ ...createHorseAggregationDto });
    await this.save(newHorseAggregation);
    return newHorseAggregation;
  }
}
