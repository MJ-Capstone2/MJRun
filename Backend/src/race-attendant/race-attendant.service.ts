import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';
import { CreateRaceAttendantDto } from './dto/create-race-attendant.dto';
import { UpdateRaceAttendantDto } from './dto/update-race-attendant.dto';
import { RaceAttendant } from './entities/race-attendant.entity';
import { RaceAttendantRepository } from './race-attendant.repository';

@Injectable()
export class RaceAttendantService {
  constructor(
    @InjectRepository(RaceAttendantRepository)
    private raceAttendantRepository: RaceAttendantRepository,
    @InjectRepository(HorseRaceRepository)
    private horseRaceRepository: HorseRaceRepository,
  ) {}

  create(
    createRaceAttendantDto: CreateRaceAttendantDto,
  ): Promise<RaceAttendant> {
    const race_id = createRaceAttendantDto.horseRace.race_id;
    const line_number = createRaceAttendantDto.line_number;
    const updatedCreateRaceAttendantDto = { ...createRaceAttendantDto };
    updatedCreateRaceAttendantDto.ra_id = +`${race_id}${
      line_number > 9 ? line_number : '0' + line_number.toString()
    }`;
    return this.raceAttendantRepository.createRaceAttendant(
      updatedCreateRaceAttendantDto,
    );
  }

  async findAll(race_id?: number): Promise<RaceAttendant[]> {
    const where = {};
    const relations = ['horseRace', 'horse', 'jockey', 'trainer'];
    if (race_id) {
      where['horseRace'] = { race_id };
      console.log(where);
    }
    return await this.raceAttendantRepository.find({ where, relations });
  }

  async findOne(ra_id: number): Promise<RaceAttendant> {
    const raceAttendant = await this.raceAttendantRepository.findOne(ra_id);
    if (!raceAttendant) {
      throw new NotFoundException(
        `Can't find Race Attendant with race attendant id : ${ra_id}`,
      );
    }
    return raceAttendant;
  }

  async update(
    ra_id: number,
    updateRaceAttendantDto: UpdateRaceAttendantDto,
  ): Promise<RaceAttendant> {
    const raceAttendant = await this.findOne(ra_id);
    const updatedRaceAttendant = Object.assign({
      ...raceAttendant,
      ...updateRaceAttendantDto,
    });
    await this.raceAttendantRepository.save(updatedRaceAttendant);
    return updatedRaceAttendant;
  }

  async remove(ra_id: number): Promise<void> {
    const result = await this.raceAttendantRepository.delete(ra_id);

    if (result.affected == 0) {
      throw new NotFoundException(
        `Can't find Race Attendant with race attendant id : ${ra_id}`,
      );
    }
    console.log(result);
  }
}
