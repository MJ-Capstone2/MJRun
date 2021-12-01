import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AIPredictionRepository } from './aiprediction.repository';
import { CreateAIPredictionDto } from './dto/create-aiprediction.dto';
import { UpdateAIPredictionDto } from './dto/update-aiprediction.dto';
import { AIPrediction } from './entities/aiprediction.entity';

@Injectable()
export class AIPredictionService {
  constructor(
    @InjectRepository(AIPredictionRepository)
    private aiPredictionRepository: AIPredictionRepository,
  ) {}
  async create(createAIPredictionDto: CreateAIPredictionDto) {
    try {
      await this.findOne(createAIPredictionDto.horseRace.race_id);
    } catch {
      return this.aiPredictionRepository.createAIPrediction(
        createAIPredictionDto,
      );
    }
  }

  async findAll(): Promise<AIPrediction[]> {
    return await this.aiPredictionRepository.find({
      relations: ['HorseRace'],
    });
  }

  async findOne(id: number): Promise<AIPrediction> {
    const aiPreidction = await this.aiPredictionRepository.findOne(id);
    if (!aiPreidction) {
      throw new NotFoundException(`Can't find AIPreidciont with id : ${id}`);
    }
    return aiPreidction;
  }

  async update(id: number, updateAIPredictionDto: UpdateAIPredictionDto) {
    const aiPrediction = await this.findOne(id);
    const updatedAIPrediction = Object.assign({
      ...aiPrediction,
      ...updateAIPredictionDto,
    });
    await this.aiPredictionRepository.save(updatedAIPrediction);
    return updatedAIPrediction;
  }

  async remove(id: number): Promise<void> {
    const result = await this.aiPredictionRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find AIPrediction with id : ${id}`);
    }

    console.log(result);
  }
}
