import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HorseAggregationService } from 'src/horse-aggregation/horse-aggregation.service';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';
import { JockeyAggregationService } from 'src/jockey-aggregation/jockey-aggregation.service';
import { Jockey } from 'src/jockey/entities/jockey.entity';
import { TrainerAggregationService } from 'src/trainer-aggregation/trainer-aggregation.service';
import { Trainer } from 'src/trainer/entities/trainer.entity';
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
    private httpService: HttpService,
    private horseAS: HorseAggregationService,
    private jockeyAS: JockeyAggregationService,
    private trainerAS: TrainerAggregationService,
  ) {}

  create(
    createRaceAttendantDto: CreateRaceAttendantDto,
  ): Promise<RaceAttendant> {
    const race_id = createRaceAttendantDto.horseRace.race_id;
    const line_number = +createRaceAttendantDto.line_number;
    const updatedCreateRaceAttendantDto = { ...createRaceAttendantDto };
    updatedCreateRaceAttendantDto['ra_id'] = +`${race_id}${
      line_number > 9 ? line_number : '0' + line_number.toString()
    }`;
    return this.raceAttendantRepository.createRaceAttendant(
      updatedCreateRaceAttendantDto,
    );
  }
  async multiCreate(objs: object[]): Promise<void> {
    // console.log('race-attendant : objs\n', objs);
    const createRaceAttendantDtos = [];
    for (let obj of objs) {
      const horseRace = await this.horseRaceRepository.findOne(+obj['race_id']);
      const horse = (await this.horseAS.findOneOrigin(+obj['HR_NO'])).horse;
      const jockey = (await this.jockeyAS.findOne(obj['JK_NO'])).jockey;
      const trainer = (await this.trainerAS.findOne(obj['TR_NO'])).trainer;
      // delete obj['race_id'];
      let newCRADto = new CreateRaceAttendantDto();
      Object.assign(newCRADto, {
        horse,
        jockey,
        trainer,
        horseRace,
        line_number: obj['LineNumber'],
      });
      if (obj == objs[0]) console.log(newCRADto);
      createRaceAttendantDtos.push(newCRADto);
    }
    for (let createRaceAttendantDto of createRaceAttendantDtos) {
      this.create(createRaceAttendantDto);
    }
  }

  async findAll(
    race_id?: number,
    order_array?: number[],
  ): Promise<RaceAttendant[]> {
    const where = [];
    const relations = ['horseRace', 'horse', 'jockey', 'trainer'];
    const horseRace = race_id;
    // console.log(race_id);
    if (horseRace) {
      if (order_array) {
        for (const result of order_array) where.push({ horseRace, result });
      } else {
        where.push({ horseRace });
      }
    }
    return await this.raceAttendantRepository.find({
      where,
      relations,
    });
  }

  async findOne(ra_id: number): Promise<RaceAttendant> {
    const relations = ['horseRace', 'horse', 'jockey', 'trainer'];
    const raceAttendant = await this.raceAttendantRepository.findOne(ra_id, {
      relations,
    });
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

  async addResult(objs: Object[]): Promise<void> {
    // const resultsObj = {
    //   data: [
    //     {
    //       race_id: 20202020,
    //       linenumber: 1,
    //       result: 2,
    //     },
    //     {
    //       race_id: 2020202,
    //       linenumber: 1,
    //       result: 2,
    //     },
    //   ],
    // };
    for (const result of objs) {
      const ra_id = parseInt(
        `${result['race_id']}${result['LineNumber']
          .toString()
          .padStart(2, '0')}`,
      );
      // const raceAttendant = await this.findOne(ra_id);
      await this.raceAttendantRepository.update(ra_id, {
        result: result['result'],
      });
      // await this.horseAS.addResult(
      //   raceAttendant.horse.horse_number,
      //   raceAttendant.result,
      // );
      // await this.jockeyAS.addResult(
      //   raceAttendant.jockey.id,
      //   raceAttendant.result,
      // );
      // await this.trainerAS.addResult(
      //   raceAttendant.trainer.id,
      //   raceAttendant.result,
      // );
    }
  }
}
