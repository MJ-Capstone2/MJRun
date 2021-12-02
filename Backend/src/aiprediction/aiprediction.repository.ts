import { EntityRepository, Repository } from 'typeorm';
import { CreateAIPredictionDto } from './dto/create-aiprediction.dto';
import { AIPrediction } from './entities/aiprediction.entity';

@EntityRepository(AIPrediction)
export class AIPredictionRepository extends Repository<AIPrediction> {
  async createAIPrediction(
    createAIPredictionDto: CreateAIPredictionDto,
  ): Promise<AIPrediction> {
    const newAIPrediction = this.create({ ...createAIPredictionDto });
    await this.save(newAIPrediction);
    return newAIPrediction;
  }
}
