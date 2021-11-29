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

  async findOne(trainer_number: number): Promise<Trainer> {
    const trainer = await this.trainerRepository.findOne(trainer_number);
    if (!trainer) {
      throw new NotFoundException(
        `Can't find trainer with trainer_number : ${trainer_number}`,
      );
    }
    return trainer;
  }

  async update(
    trainer_number: number,
    updateTrainerDto: UpdateTrainerDto,
  ): Promise<Trainer> {
    const trainer = await this.findOne(trainer_number);
    const updateTrainer = Object.assign({ ...trainer, ...updateTrainerDto });
    await this.trainerRepository.save(updateTrainer);
    return updateTrainer;
  }

  async remove(trainer_number: number): Promise<void> {
    const result = await this.trainerRepository.delete(trainer_number);

    if (result.affected == 0) {
      throw new NotFoundException(
        `Can't find trainer with trainer_number : ${trainer_number}`,
      );
    }

    console.log(result);
  }
}
