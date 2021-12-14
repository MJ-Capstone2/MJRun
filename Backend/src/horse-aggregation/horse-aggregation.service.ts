import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { serialize } from 'class-transformer';
import { CreateHorseAggregationDto } from './dto/create-horse-aggregation.dto';
import { UpdateHorseAggregationDto } from './dto/update-horse-aggregation.dto';
import { HorseAggregation } from './entities/horse-aggregation.entity';
import { HorseAggregationRepository } from './horse-aggregation.repository';

@Injectable()
export class HorseAggregationService {
  constructor(
    @InjectRepository(HorseAggregationRepository)
    private horseAggregationRepository: HorseAggregationRepository,
  ) {}
  async create(createHorseAggregationDto: CreateHorseAggregationDto) {
    try {
      await this.findOne(createHorseAggregationDto.horse.horse_number);
    } catch {
      return this.horseAggregationRepository.createHorseAggregation(
        createHorseAggregationDto,
      );
    }
  }

  async findAll(): Promise<HorseAggregation[]> {
    const horseAggregations = await this.horseAggregationRepository.find({
      relations: ['horse'],
    });
    horseAggregations.map((horseAggregation) =>
      horseAggregation.serializeHorse(),
    );
    return horseAggregations;
  }

  async findOne(horse_number: number): Promise<HorseAggregation> {
    const horseAggreagtion = await this.horseAggregationRepository.findOne(
      horse_number,
      { relations: ['horse'] },
    );
    if (!horseAggreagtion) {
      throw new NotFoundException(
        `Can't find Hourse with hourse_number : ${horse_number}`,
      );
    }
    return horseAggreagtion.serializeHorse();
  }

  async update(
    horse_number: number,
    updateHorseDto: UpdateHorseAggregationDto,
  ) {
    const horseAggreagtion = await this.findOne(horse_number);
    const updateHorseAggregation = Object.assign({
      ...horseAggreagtion,
      ...updateHorseDto,
    });
    await this.horseAggregationRepository.save(updateHorseAggregation);
    return updateHorseAggregation;
  }

  async remove(horse_number: number): Promise<void> {
    const result = await this.horseAggregationRepository.delete(horse_number);

    if (result.affected == 0) {
      throw new NotFoundException(
        `Can't find Horse with horse_number : ${horse_number}`,
      );
    }

    console.log(result);
  }
}
