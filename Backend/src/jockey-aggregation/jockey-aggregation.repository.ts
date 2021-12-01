import { EntityRepository, Repository } from 'typeorm';
import { CreateJockeyAggregationDto } from './dto/create-jockey-aggregation.dto';
import { JockeyAggregation } from './entities/jockey-aggregation.entity';

@EntityRepository(JockeyAggregation)
export class JockeyAggregationRepository extends Repository<JockeyAggregation> {
  async createJockeyAggregation(
    createJockeyAggregationDto: CreateJockeyAggregationDto,
  ): Promise<JockeyAggregation> {
    const newJockeyAggregation = this.create({ ...createJockeyAggregationDto });
    await this.save(newJockeyAggregation);
    return newJockeyAggregation;
  }
}
