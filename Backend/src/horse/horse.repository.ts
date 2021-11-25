import { EntityRepository, Repository } from 'typeorm';
import { CreateHorseDto } from './dto/create-horse.dto';
import { Horse } from './entities/horse.entity';

@EntityRepository(Horse)
export class HorseRepository extends Repository<Horse> {
  async createHorse(createHorseDto: CreateHorseDto): Promise<Horse> {
    const newHorse = this.create({ ...createHorseDto });
    await this.save(newHorse);
    return newHorse;
  }
}
