import { EntityRepository, Repository } from 'typeorm';
import { CreateJockeyDto } from './dto/create-jockey.dto';
import { Jockey } from './entities/jockey.entity';

@EntityRepository(Jockey)
export class JockeyRepository extends Repository<Jockey> {
  async createJockey(createJockeyDto: CreateJockeyDto): Promise<Jockey> {
    const newJockey = this.create({ ...createJockeyDto });
    // console.log(createJockeyDto);
    await this.save(newJockey);
    return newJockey;
  }
}
