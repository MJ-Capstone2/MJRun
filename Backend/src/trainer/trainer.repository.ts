import { EntityRepository, Repository } from 'typeorm';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { Trainer } from './entities/trainer.entity';

@EntityRepository(Trainer)
export class TrainerRepository extends Repository<Trainer> {
  async createTrainer(createTrainerDto: CreateTrainerDto): Promise<Trainer> {
    const newTrainer = this.create({ ...createTrainerDto });
    await this.save(newTrainer);
    return newTrainer;
  }
}
