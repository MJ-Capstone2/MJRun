import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JockeyAggregationService } from 'src/jockey-aggregation/jockey-aggregation.service';
import { CreateJockeyDto } from './dto/create-jockey.dto';
import { UpdateJockeyDto } from './dto/update-jockey.dto';
import { Jockey } from './entities/jockey.entity';
import { JockeyRepository } from './jockey.repository';

@Injectable()
export class JockeyService {
  constructor(
    @InjectRepository(JockeyRepository)
    private jockeyRepository: JockeyRepository,
    private jockeyAggregationService: JockeyAggregationService,
  ) {}

  async create(createJockeyDto: CreateJockeyDto): Promise<Jockey> {
    const newJockey = await this.jockeyRepository.createJockey(createJockeyDto);

    await this.jockeyAggregationService.create({
      jockey: newJockey,
      total_race_count: 0,
      total_win_rate: 0,
      total_ord1_count: 0,
      total_ord2_count: 0,
      total_ord3_count: 0,
    });
    return newJockey;
  }
  async multiCreate(objs: object[]): Promise<void> {
    const craeteJockeyDTOs = [];
    for (let obj of objs) {
      let newCJDto = new CreateJockeyDto();
      Object.assign(newCJDto, obj);
      craeteJockeyDTOs.push(newCJDto);
    }
    for (let craeteJockeyDTO of craeteJockeyDTOs) {
      // console.log(craeteJockeyDTO);
      await this.jockeyRepository.createJockey(craeteJockeyDTO);
    }
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
