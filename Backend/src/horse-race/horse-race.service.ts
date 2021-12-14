import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, MoreThanOrEqual } from 'typeorm';
import { CreateHorseRaceDto } from './dto/create-horse-race.dto';
import { UpdateHorseRaceDto } from './dto/update-horse-race.dto';
import { HorseRace } from './entities/horse-race.entity';
import { HorseRaceRepository } from './horse-race.repository';

@Injectable()
export class HorseRaceService {
  constructor(
    @InjectRepository(HorseRaceRepository)
    private horseRaceRepository: HorseRaceRepository,
  ) {}

  create(createHorseRaceDto: CreateHorseRaceDto): Promise<HorseRace> {
    return this.horseRaceRepository.createHorseRace(createHorseRaceDto);
  }

  async findAll(period?: string): Promise<HorseRace[]> {
    if (period) {
      const today = new Date('2019-03-01');
      const dayoff = period == 'week' ? 7 : 30;
      const start_date = new Date(
        today.getTime() - dayoff * 24 * 60 * 60 * 1000,
      );
      return await this.horseRaceRepository.find({
        race_location: '서울',
        race_date: MoreThanOrEqual(
          parseInt(
            `${start_date.getFullYear()}${(start_date.getMonth() + 1)
              .toString()
              .padStart(2, '0')}${start_date
              .getDate()
              .toString()
              .padStart(2, '0')}`,
          ),
        ),
      });
    }
    return await this.horseRaceRepository.find();
  }
  async findAllAtDate(date: Date): Promise<HorseRace[]> {
    return await this.horseRaceRepository.find({
      where: {
        race_date: parseInt(
          `${date.getFullYear()}${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`,
        ),
      },
      order: {
        race_start_time: 'ASC',
      },
    });
  }

  async findOne(race_id: number): Promise<HorseRace> {
    const horseRace = await this.horseRaceRepository.findOne(race_id);
    if (!horseRace) {
      throw new NotFoundException(
        `Can't find HorseRace with race id : ${race_id}`,
      );
    }
    return horseRace;
  }

  async update(
    race_id: number,
    updateHorseRaceDto: UpdateHorseRaceDto,
  ): Promise<HorseRace> {
    const horseRace = await this.findOne(race_id);
    const updatedHorseRace = Object.assign({
      ...horseRace,
      ...updateHorseRaceDto,
    });
    await this.horseRaceRepository.save(updatedHorseRace);
    return updatedHorseRace;
  }

  async remove(race_id: number): Promise<void> {
    const result = await this.horseRaceRepository.delete(race_id);

    if (result.affected == 0) {
      throw new NotFoundException(
        `Can't find HorseRace with race id : ${race_id}`,
      );
    }
    console.log(result);
  }
}
