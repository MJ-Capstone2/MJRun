import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJockeyDto } from './dto/create-jockey.dto';
import { UpdateJockeyDto } from './dto/update-jockey.dto';
import { Jockey } from './entities/jockey.entity';
import { JockeyRepository } from './jockey.repository';

@Injectable()
export class JockeyService {
  constructor(
    @InjectRepository(JockeyRepository)
    private jockeyRepository: JockeyRepository,
  ) {}

  create(createJockeyDto: CreateJockeyDto): Promise<Jockey> {
    return this.jockeyRepository.createJockey(createJockeyDto);
  }

  async findAll() {
    return await this.jockeyRepository.find();
  }

  async findOne(jk_id: number) {
    const jockey = await this.jockeyRepository.findOne(jk_id);
    if (!jockey) {
      throw new NotFoundException(`Can't find jockey with jk_id : ${jk_id}`);
    }
    return jockey;
  }

  async update(
    jk_id: number,
    updateJockeyDto: UpdateJockeyDto,
  ): Promise<Jockey> {
    const jockey = await this.findOne(jk_id);
    const updatejockey = Object.assign({ ...jockey, ...updateJockeyDto });
    await this.jockeyRepository.save(updatejockey);
    return updatejockey;
  }

  async remove(jk_id: number) {
    const result = await this.jockeyRepository.delete(jk_id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find jockey with jk_id : ${jk_id}`);
    }

    console.log(result);
  }
}
