import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RaceAttendant } from 'src/race-attendant/entities/race-attendant.entity';
import { RaceAttendantService } from 'src/race-attendant/race-attendant.service';
import { AIPredictionRepository } from './aiprediction.repository';
import { CreateAIPredictionDto } from './dto/create-aiprediction.dto';
import { UpdateAIPredictionDto } from './dto/update-aiprediction.dto';
import { AIPrediction } from './entities/aiprediction.entity';
import { HorseAggregationService } from 'src/horse-aggregation/horse-aggregation.service';
import { JockeyAggregationService } from 'src/jockey-aggregation/jockey-aggregation.service';
import { TrainerAggregationService } from 'src/trainer-aggregation/trainer-aggregation.service';
import { find, lastValueFrom, map } from 'rxjs';
import { HorseRaceRepository } from 'src/horse-race/horse-race.repository';
import { HorseRaceService } from 'src/horse-race/horse-race.service';

@Injectable()
export class AIPredictionService {
  constructor(
    @InjectRepository(AIPredictionRepository)
    private aiPredictionRepository: AIPredictionRepository,
    @InjectRepository(HorseRaceRepository)
    private horseRaceRepository: HorseRaceRepository,
    private horseRaceService: HorseRaceService,
    private raceAttendantService: RaceAttendantService, // private mAIModel:AIModelService,
    private horseAggService: HorseAggregationService, // private mAIModel:AIModelService,
    private jockeyAggService: JockeyAggregationService, // private mAIModel:AIModelService,
    private trainerAggService: TrainerAggregationService, // private mAIModel:AIModelService,
    private httpService: HttpService,
  ) {}
  create(createAIPredictionDto: CreateAIPredictionDto) {
    return this.aiPredictionRepository.createAIPrediction(
      createAIPredictionDto,
    );
  }
  // async findAll(): Promise<AIPrediction[]> {
  async findAll() {
    return await this.aiPredictionRepository.find({
      relations: ['horseRace'],
    });
  }

  async findOne(id: number): Promise<AIPrediction> {
    const aiPreidction = await this.aiPredictionRepository.findOne(id, {
      relations: ['horseRace'],
    });
    if (!aiPreidction) {
      const horseRace = await this.horseRaceRepository.findOne(id);
      const results = await this.pridiction(id);
      return await this.aiPredictionRepository.createAIPrediction({
        horseRace,
        first_linenumber: results[0],
        second_linenumber: results[1],
        third_linenumber: results[2],
      });
      // throw new NotFoundException(`Can't find AIPreidciont with id : ${id}`);
    }
    return aiPreidction;
  }

  async update(id: number, updateAIPredictionDto: UpdateAIPredictionDto) {
    const aiPrediction = await this.findOne(id);
    const updatedAIPrediction = Object.assign({
      ...aiPrediction,
      ...updateAIPredictionDto,
    });
    await this.aiPredictionRepository.save(updatedAIPrediction);
    return updatedAIPrediction;
  }

  async remove(id: number): Promise<void> {
    const result = await this.aiPredictionRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find AIPrediction with id : ${id}`);
    }

    console.log(result);
  }
  async getPrecision(period: string, order: number): Promise<number> {
    if (!order) order = 1;
    const results = [];
    const horseRace_in_period = await this.horseRaceService.findAll(period);
    for (const horseRace of horseRace_in_period) {
      const aiPredict = await this.findOne(horseRace.race_id);
      const raceAttendants = await this.raceAttendantService.findAll(
        horseRace.race_id,
      );
      const predict =
        order == 1
          ? aiPredict.first_linenumber
          : order == 2
          ? aiPredict.second_linenumber
          : aiPredict.third_linenumber;
      for (const raceAttendant of raceAttendants) {
        if (raceAttendant.result == order) {
          const isCorrect = predict == raceAttendant.line_number;
          results.push(isCorrect ? 1 : 0);
          break;
        }
      }
    }
    return (results.reduce((prev, cur) => prev + cur) / results.length) * 100;
  }

  async preprocess(race_id: number): Promise<number[][]> {
    function convertNationality(nationality: string): number {
      if (nationality == '한국') return 0;
      if (nationality == '미국') return 1;
      return 2;
    }
    function convertSex(sex: string): number {
      if (sex == '거') return 0;
      if (sex == '수') return 1;
      return 2;
    }
    const raceAttendants: RaceAttendant[] =
      await this.raceAttendantService.findAll(race_id);

    const results = [];
    for (let ra of raceAttendants) {
      try {
        const horse_agg = await this.horseAggService.findOne(
          ra.horse.horse_number,
        );
        const jockey_agg = await this.jockeyAggService.findOne(ra.jockey.id);
        // console.log('jockey_agg', jockey_agg);
        const trainer_agg = await this.trainerAggService.findOne(ra.trainer.id);
        // console.log('tr_agg', trainer_agg);

        const year = parseInt((ra.ra_id / 10 ** 9).toString());
        const month = parseInt(((ra.ra_id / 10 ** 7) % 100).toString());
        const day = parseInt(((ra.ra_id / 10 ** 5) % 100).toString());
        const hour = +ra.horseRace.race_start_time.toString().slice(0, 2);
        const min = +ra.horseRace.race_start_time.toString().slice(3, 5);

        const horse_age = ra.horse.age;
        const horse_sex = convertSex(ra.horse.sex);
        const horse_nationality = convertNationality(ra.horse.nationality);
        const horse_rating = ra.horse.rating;
        const horse_rc = horse_agg.total_race_count;
        const horse_oc = horse_agg.total_ord1_count;

        const jockey_dy = parseInt((ra.jockey.debut / 10 ** 4).toString());
        const jockey_rc = jockey_agg.total_race_count;
        const jockey_oc = jockey_agg.total_ord1_count;

        const trainer_dy = parseInt((ra.trainer.debut / 10 ** 4).toString());
        const trainer_rc = trainer_agg.total_race_count;
        const trainer_oc = trainer_agg.total_ord1_count;

        const distance = ra.horseRace.race_distance;
        const location = parseInt(((ra.ra_id / 10 ** 4) % 10).toString());
        const lineNumber = ra.line_number;

        const result = [
          year,
          month,
          day,
          hour,
          min,
          horse_age,
          horse_sex,
          horse_nationality,
          horse_rating,
          horse_rc,
          horse_oc,
          jockey_dy,
          jockey_rc,
          jockey_oc,
          trainer_dy,
          trainer_rc,
          trainer_oc,
          distance,
          location,
          lineNumber,
        ];
        results.push(result);
      } catch (e) {
        console.log(`${ra.ra_id} error : ${e.toString()}`);
        continue;
      }
    }
    // console.log(results);
    return results;
  }
  async pridiction(race_id: number) {
    // 데이터 전처리
    const race_data = await this.preprocess(race_id);
    const req_json = {
      data: race_data,
    };
    // ai모델에 보내기
    return await lastValueFrom(
      this.httpService.post('http://localhost:3002/prediction', req_json).pipe(
        map((res) => {
          return res.data;
        }),
      ),
    );
  }
}

// RaceAttendant {
//   ra_id: '2019022420601',
//   line_number: 1,
//   result: 12,
//   horseRace: HorseRace {
//     race_id: '20190224206',
//     race_date: 20190224,
//     race_location: '부산경남',
//     race_number: 6,
//     race_start_time: '15:50:00',
//     race_distance: 1400
//   },
//   horse: Horse {
//     horse_number: 35137,
//     name: '대호시대',
//     age: 5,
//     sex: '수',
//     nationality: '한국',
//     rating: 98,
//     weight: 496
//   },
//   jockey: Jockey {
//     jk_id: 80423,
//     name: '최시대',
//     debut: 20070518,
//     birthdate: 19800912
//   },
//   trainer: Trainer {
//     tr_id: 70130,
//     name: '백광열',
//     debut: 20040302,
//     birthdate: 19641112
//   }
// }

// # 0: year;
// # 1: month;
// # 2: day;
// # 3: hour;
// # 4: min;
// # 5: horse_AGE;
// # 6: horse_SEX;
// # 7: horse_nationality;
// # 8: horse_rating;
// # 9: horse_TOTAL_RACE_COUNT;
// # 10: horse_TOTAL_ORD1_COUNT;
// # 11: jockey_DEBUT_YEAR;
// # 12: jockey_TOTAL_RACE_COUNT;
// # 13: jockey_TOTAL_ORD1_COUNT;
// # 14: trainer_DEBUT_YEAR;
// # 15: trainer_TOTAL_RACE_COUNT;
// # 16: trainer_TOTAL_ORD1_COUNT;
// # 17: race_distance;
// # 18: LOCATION;
// # 19: LineNumber;
