import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainerAggregationService } from 'src/trainer-aggregation/trainer-aggregation.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { Trainer } from './entities/trainer.entity';
import { TrainerRepository } from './trainer.repository';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(TrainerRepository)
    private trainerRepository: TrainerRepository,
    private trainerAggregationService: TrainerAggregationService,
  ) {}

  async create(createTrainerDto: CreateTrainerDto): Promise<Trainer> {
    const newTrainer = await this.trainerRepository.createTrainer(
      createTrainerDto,
    );
    await this.trainerAggregationService.create({
      trainer: newTrainer,
      total_race_count: 0,
      total_ord1_count: 0,
      total_ord2_count: 0,
      total_ord3_count: 0,
      total_win_rate: 0,
    });
    return newTrainer;
  }

  async multiCreate(objs: object[]): Promise<void> {
    const createTrainerDtos = [];
    for (let obj of objs) {
      let newCTDto = new CreateTrainerDto();
      Object.assign(newCTDto, obj);
      createTrainerDtos.push(newCTDto);
    }
    for (let createTrainerDto of createTrainerDtos) {
      console.log(createTrainerDto);
      // await this.jockeyRepository.createJockey(createTrainerDto);
    }
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
  async removeAll(ids: string[]): Promise<void> {
    for (const id of ids) await this.remove(+id);
  }
}
