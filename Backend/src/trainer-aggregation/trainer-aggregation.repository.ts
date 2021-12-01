import { EntityRepository, Repository } from 'typeorm';
import { CreateTrainerAggregationDto } from './dto/create-trainer-aggregation.dto';
import { TrainerAggregation } from './entities/trainer-aggregation.entity';

@EntityRepository(TrainerAggregation)
export class TrainerAggregationRepository extends Repository<TrainerAggregation> {
  async createTrainerAggregation(
    createTrainerAggregationDto: CreateTrainerAggregationDto,
  ): Promise<TrainerAggregation> {
    const newTrainerAggregation = this.create({
      ...createTrainerAggregationDto,
    });
    await this.save(newTrainerAggregation);
    return newTrainerAggregation;
  }
}
