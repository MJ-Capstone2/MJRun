import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return horseAggregations;
  }

  async findAllSerialize(): Promise<HorseAggregation[]> {
    const horseAggregations = await this.horseAggregationRepository.find({
      relations: ['horse'],
    });
    horseAggregations.map((horseAggregation) => {
      const serialHorseAgg = horseAggregation.serializeHorse();
      serialHorseAgg['id'] = serialHorseAgg['horse_number'];
      delete serialHorseAgg['horse_number'];
      return serialHorseAgg;
    });
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

  async addResult(horse_number: number, result: number): Promise<void> {
    const horseAgg = await this.findOne(horse_number);
    horseAgg.total_race_count += 1;
    if (result == 1) horseAgg.total_ord1_count += 1;
    if (result == 2) horseAgg.total_ord2_count += 1;
    if (result == 3) horseAgg.total_ord3_count += 1;
    horseAgg.total_win_rate =
      horseAgg.total_ord1_count / horseAgg.total_race_count;
    this.horseAggregationRepository.save(horseAgg);
  }
}
