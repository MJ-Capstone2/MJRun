import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainerRepository } from 'src/trainer/trainer.repository';
import { CreateTrainerAggregationDto } from './dto/create-trainer-aggregation.dto';
import { UpdateTrainerAggregationDto } from './dto/update-trainer-aggregation.dto';
import { TrainerAggregation } from './entities/trainer-aggregation.entity';
import { TrainerAggregationRepository } from './trainer-aggregation.repository';

@Injectable()
export class TrainerAggregationService {
  constructor(
    @InjectRepository(TrainerRepository)
    private trainerAggregationRepository: TrainerAggregationRepository,
  ) {}
  async create(createTrainerAggregationDto: CreateTrainerAggregationDto) {
    try {
      await this.findOne(createTrainerAggregationDto.trainer.tr_id);
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

  async findOne(tr_id: number): Promise<TrainerAggregation> {
    const TrainerAggreagtion = await this.trainerAggregationRepository.findOne(
      tr_id,
    );
    if (!TrainerAggreagtion) {
      throw new NotFoundException(`Can't find Trainer with tr_id : ${tr_id}`);
    }
    return TrainerAggreagtion;
  }

  async update(
    tr_id: number,
    updateTrainerAggregationDto: UpdateTrainerAggregationDto,
  ): Promise<TrainerAggregation> {
    const TrainerAggregation = await this.findOne(tr_id);
    const updateTrainerAggregation = Object.assign({
      ...TrainerAggregation,
      ...updateTrainerAggregationDto,
    });

    await this.trainerAggregationRepository.save(updateTrainerAggregation);
    return updateTrainerAggregation;
  }

  async remove(tr_id: number): Promise<void> {
    const result = await this.trainerAggregationRepository.delete(tr_id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find Trainer with tr_id : ${tr_id}`);
    }

    console.log(result);
  }
}
