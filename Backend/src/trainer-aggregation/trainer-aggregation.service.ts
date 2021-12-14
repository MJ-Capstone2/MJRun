import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrainerAggregationDto } from './dto/create-trainer-aggregation.dto';
import { UpdateTrainerAggregationDto } from './dto/update-trainer-aggregation.dto';
import { TrainerAggregation } from './entities/trainer-aggregation.entity';
import { TrainerAggregationRepository } from './trainer-aggregation.repository';

@Injectable()
export class TrainerAggregationService {
  constructor(
    @InjectRepository(TrainerAggregationRepository)
    private trainerAggregationRepository: TrainerAggregationRepository,
  ) {}
  async create(createTrainerAggregationDto: CreateTrainerAggregationDto) {
    try {
      await this.findOne(createTrainerAggregationDto.trainer.id);
    } catch {
      return this.trainerAggregationRepository.createTrainerAggregation(
        createTrainerAggregationDto,
      );
    }
  }

  async findAll(): Promise<TrainerAggregation[]> {
    return await this.trainerAggregationRepository.find({
      relations: ['Trainer'],
    });
  }

  async findOne(id: number): Promise<TrainerAggregation> {
    const TrainerAggreagtion = await this.trainerAggregationRepository.findOne(
      id,
    );
    if (!TrainerAggreagtion) {
      throw new NotFoundException(`Can't find Trainer with id : ${id}`);
    }
    return TrainerAggreagtion;
  }

  async update(
    id: number,
    updateTrainerAggregationDto: UpdateTrainerAggregationDto,
  ): Promise<TrainerAggregation> {
    const trainerAggregation = await this.findOne(id);
    const updateTrainerAggregation = Object.assign({
      ...trainerAggregation,
      ...updateTrainerAggregationDto,
    });

    await this.trainerAggregationRepository.save(updateTrainerAggregation);
    return updateTrainerAggregation;
  }

  async remove(id: number): Promise<void> {
    const result = await this.trainerAggregationRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find Trainer with id : ${id}`);
    }

    console.log(result);
  }
}
