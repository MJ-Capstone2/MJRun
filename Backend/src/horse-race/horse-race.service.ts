import { Injectable } from '@nestjs/common';
import { CreateHorseRaceDto } from './dto/create-horse-race.dto';
import { UpdateHorseRaceDto } from './dto/update-horse-race.dto';

@Injectable()
export class HorseRaceService {
  create(createHorseRaceDto: CreateHorseRaceDto) {
    return 'This action adds a new horseRace';
  }

  findAll() {
    return `This action returns all horseRace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} horseRace`;
  }

  update(id: number, updateHorseRaceDto: UpdateHorseRaceDto) {
    return `This action updates a #${id} horseRace`;
  }

  remove(id: number) {
    return `This action removes a #${id} horseRace`;
  }
}
