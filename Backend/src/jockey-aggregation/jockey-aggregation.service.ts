import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJockeyAggregationDto } from './dto/create-jockey-aggregation.dto';
import { UpdateJockeyAggregationDto } from './dto/update-jockey-aggregation.dto';
import { JockeyAggregation } from './entities/jockey-aggregation.entity';
import { JockeyAggregationRepository } from './jockey-aggregation.repository';

@Injectable()
export class JockeyAggregationService {
  constructor(
    @InjectRepository(JockeyAggregationRepository)
    private jockeyAggregationRepository: JockeyAggregationRepository,
  ) {}
  async create(createJockeyAggregationDto: CreateJockeyAggregationDto) {
    try {
      await this.findOne(createJockeyAggregationDto.jockey.id);
    } catch {
      return this.jockeyAggregationRepository.createJockeyAggregation(
        createJockeyAggregationDto,
      );
    }
  }

  async findAll(): Promise<JockeyAggregation[]> {
    return await this.jockeyAggregationRepository.find({
      relations: ['jockey'],
    });
  }

  async findOne(id: number): Promise<JockeyAggregation> {
    const jockeyAggreagtion = await this.jockeyAggregationRepository.findOne(
      id,
    );
    if (!jockeyAggreagtion) {
      throw new NotFoundException(`Can't find Jockey with id : ${id}`);
    }
    return jockeyAggreagtion;
  }

  async update(
    id: number,
    updateJockeyAggregationDto: UpdateJockeyAggregationDto,
  ): Promise<JockeyAggregation> {
    const jockeyAggregation = await this.findOne(id);
    const updateJockeyAggregation = Object.assign({
      ...jockeyAggregation,
      ...updateJockeyAggregationDto,
    });

    await this.jockeyAggregationRepository.save(updateJockeyAggregation);
    return updateJockeyAggregation;
  }

  async remove(id: number): Promise<void> {
    const result = await this.jockeyAggregationRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find Jockey with id : ${id}`);
    }

    console.log(result);
  }
}
