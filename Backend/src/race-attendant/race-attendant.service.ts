import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateHorseAggregationDto } from 'src/horse-aggregation/dto/update-horse-aggregation.dto';
import { HorseAggregationService } from 'src/horse-aggregation/horse-aggregation.service';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';
import { JockeyAggregationService } from 'src/jockey-aggregation/jockey-aggregation.service';
import { TrainerAggregationService } from 'src/trainer-aggregation/trainer-aggregation.service';
import { Between } from 'typeorm';
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
    private horseAS: HorseAggregationService,
    private jockeyAS: JockeyAggregationService,
    private trainerAS: TrainerAggregationService,
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

  async addResult(race_id: number, results: JSON): Promise<void> {
    // const resultsObj = JSON.parse(JSON.stringify(results));

    const resultsObj = {
      results: [
        {
          race_id: 20202020,
          linenumber: 1,
          result: 2,
        },
        {
          race_id: 20202020,
          linenumber: 1,
          result: 2,
        },
      ],
    };
    for (const result of resultsObj.results) {
      const ra_id = parseInt(
        `${result.race_id}${result.linenumber.toString().padStart(2, '0')}`,
      );
      const raceAttendant = await this.findOne(ra_id);
      const updatedRaceAttendant = Object.assign({
        ...raceAttendant,
        result: result.result,
      });
      await this.raceAttendantRepository.save(updatedRaceAttendant);
      await this.horseAS.addResult(
        raceAttendant.horse.horse_number,
        raceAttendant.result,
      );
      await this.jockeyAS.addResult(
        raceAttendant.jockey.id,
        raceAttendant.result,
      );
      await this.trainerAS.addResult(
        raceAttendant.trainer.id,
        raceAttendant.result,
      );
    }
  }
}
