import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { Trainer } from './entities/trainer.entity';
import { TrainerRepository } from './trainer.repository';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(TrainerRepository)
    private trainerRepository: TrainerRepository,
  ) {}

  create(createTrainerDto: CreateTrainerDto): Promise<Trainer> {
    return this.trainerRepository.createTrainer(createTrainerDto);
  }

  async findAll(): Promise<Trainer[]> {
    const trainers = await this.trainerRepository.find();
    return trainers;
  }

  async findOne(id: number): Promise<Trainer> {
    const trainer = await this.trainerRepository.findOne(id);
    if (!trainer) {
      throw new NotFoundException(`Can't find trainer with id : ${id}`);
    }
    return trainer;
  }

  async update(
    id: number,
    updateTrainerDto: UpdateTrainerDto,
  ): Promise<Trainer> {
    const trainer = await this.findOne(id);
    const updateTrainer = Object.assign({ ...trainer, ...updateTrainerDto });
    await this.trainerRepository.save(updateTrainer);
    return updateTrainer;
  }

  async remove(id: number): Promise<void> {
    const result = await this.trainerRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find trainer with id : ${id}`);
    }

    console.log(result);
  }
}
