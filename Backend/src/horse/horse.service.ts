import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HorseAggregationService } from 'src/horse-aggregation/horse-aggregation.service';
import { CreateHorseDto } from './dto/create-horse.dto';
import { UpdateHorseDto } from './dto/update-horse.dto';
import { Horse } from './entities/horse.entity';
import { HorseRepository } from './horse.repository';

@Injectable()
export class HorseService {
  constructor(
    @InjectRepository(HorseRepository)
    private horseRepository: HorseRepository,
    private horseAggregaionService: HorseAggregationService,
  ) {}

  async create(createHorseDto: CreateHorseDto): Promise<Horse> {
    const newHorse = await this.horseRepository.createHorse(createHorseDto);
    await this.horseAggregaionService.create({
      horse: newHorse,
      total_race_count: 0,
      total_win_rate: 0,
      total_ord1_count: 0,
      total_ord2_count: 0,
      total_ord3_count: 0,
    });
    return newHorse;
  }
  async multiCreate(objs: object[]): Promise<void> {
    const createHorseDtos = [];
    for (let obj of objs) {
      let newCHDto = new CreateHorseDto();
      Object.assign(newCHDto, obj);
      createHorseDtos.push(newCHDto);
    }
    for (let createHorseDto of createHorseDtos) {
      console.log(createHorseDto);
      // await this.horseRepository.createHorse(createHorseDto);
    }
  }

  async findAll(): Promise<Horse[]> {
    // const horses = ;
    return await this.horseRepository.find();
  }

  async findOne(horse_number: number) {
    const horse = await this.horseRepository.findOne(horse_number);
    if (!horse) {
      throw new NotFoundException(
        `Can't find Horse with hourse_number : ${horse_number}`,
      );
    }
    return horse;
  }

  async update(horse_number: number, updateHorseDto: UpdateHorseDto) {
    const horse = await this.findOne(horse_number);
    const updateHorse = Object.assign({ ...horse, ...updateHorseDto });
    await this.horseRepository.save(updateHorse);
    return updateHorse;
  }

  async remove(horse_number: number): Promise<void> {
    const result = await this.horseRepository.delete(horse_number);

    if (result.affected == 0) {
      throw new NotFoundException(
        `Can't find Horse with horse_number : ${horse_number}`,
      );
    }

    console.log(result);
  }
  async removeAll(ids: string[]): Promise<void> {
    for (const horse_number of ids) await this.remove(+horse_number);
  }
}
