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
    const jockeys = await this.jockeyRepository.find();
    return jockeys;
  }

  async findOne(jockey_number: number) {
    const jockey = await this.jockeyRepository.findOne(jockey_number);
    if (!jockey) {
      throw new NotFoundException(
        `Can't find jockey with jockey_number : ${jockey_number}`,
      );
    }
    return jockey;
  }

  async update(
    jockey_number: number,
    updateJockeyDto: UpdateJockeyDto,
  ): Promise<Jockey> {
    const jockey = await this.findOne(jockey_number);
    const updatejockey = Object.assign({ ...jockey, ...updateJockeyDto });
    await this.jockeyRepository.save(updatejockey);
    return updatejockey;
  }

  async remove(jockey_number: number) {
    const result = await this.jockeyRepository.delete(jockey_number);

    if (result.affected == 0) {
      throw new NotFoundException(
        `Can't find jockey with jockey_number : ${jockey_number}`,
      );
    }

    console.log(result);
  }
}
