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
      relations: ['trainer'],
    });
  }

  async findOne(id: number): Promise<TrainerAggregation> {
    const TrainerAggreagtion = await this.trainerAggregationRepository.findOne(
      id,
      { relations: ['trainer'] },
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

  async addResult(tr_id: number, result: number): Promise<void> {
    const trainerAgg = await this.findOne(tr_id);
    trainerAgg.total_race_count += 1;
    if (result == 1) trainerAgg.total_ord1_count += 1;
    if (result == 2) trainerAgg.total_ord2_count += 1;
    if (result == 3) trainerAgg.total_ord3_count += 1;
    trainerAgg.total_win_rate =
      trainerAgg.total_ord1_count / trainerAgg.total_race_count;
    this.trainerAggregationRepository.update(tr_id, trainerAgg);
  }
}
