import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHorseDto } from './dto/create-horse.dto';
import { UpdateHorseDto } from './dto/update-horse.dto';
import { Horse } from './entities/horse.entity';
import { HorseRepository } from './horse.repository';

@Injectable()
export class HorseService {
  constructor(
    @InjectRepository(HorseRepository)
    private horseRepository: HorseRepository,
  ) {}

  create(createHorseDto: CreateHorseDto): Promise<Horse> {
    return this.horseRepository.createHorse(createHorseDto);
  }

  async findAll(): Promise<Horse[]> {
    const horses = await this.horseRepository.find();
    return horses;
  }

  async findOne(horse_number: number) {
    const horse = await this.horseRepository.findOne(horse_number);
    if (!horse) {
      throw new NotFoundException(
        `Can't find Hourse with hourse_number : ${horse_number}`,
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
}
