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

  async findOne(id: number) {
    const jockey = await this.jockeyRepository.findOne(id);
    if (!jockey) {
      throw new NotFoundException(`Can't find jockey with id : ${id}`);
    }
    return jockey;
  }

  async update(id: number, updateJockeyDto: UpdateJockeyDto): Promise<Jockey> {
    const jockey = await this.findOne(id);
    const updatejockey = Object.assign({ ...jockey, ...updateJockeyDto });
    await this.jockeyRepository.save(updatejockey);
    return updatejockey;
  }

  async remove(id: number) {
    const result = await this.jockeyRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find jockey with id : ${id}`);
    }

    console.log(result);
  }
  async removeAll(ids: string[]) {
    for (const id of ids) await this.remove(+id);
  }
}
