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
      await this.findOne(createJockeyAggregationDto.jockey.jk_id);
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

  async findOne(jk_id: number): Promise<JockeyAggregation> {
    const jockeyAggreagtion = await this.jockeyAggregationRepository.findOne(
      jk_id,
    );
    if (!jockeyAggreagtion) {
      throw new NotFoundException(`Can't find Jockey with jk_id : ${jk_id}`);
    }
    return jockeyAggreagtion;
  }

  async update(
    jk_id: number,
    updateJockeyAggregationDto: UpdateJockeyAggregationDto,
  ): Promise<JockeyAggregation> {
    const jockeyAggregation = await this.findOne(jk_id);
    const updateJockeyAggregation = Object.assign({
      ...jockeyAggregation,
      ...updateJockeyAggregationDto,
    });

    await this.jockeyAggregationRepository.save(updateJockeyAggregation);
    return updateJockeyAggregation;
  }

  async remove(jk_id: number): Promise<void> {
    const result = await this.jockeyAggregationRepository.delete(jk_id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find Jockey with jk_id : ${jk_id}`);
    }

    console.log(result);
  }
}
