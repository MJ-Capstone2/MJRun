import { Injectable, NotFoundException } from '@nestjs/common';
import { AIPredictionService } from './aiprediction/aiprediction.service';
import { HorseAggregationService } from './horse-aggregation/horse-aggregation.service';
import { HorseRaceService } from './horse-race/horse-race.service';
import { JockeyAggregationService } from './jockey-aggregation/jockey-aggregation.service';
import { RaceAttendantService } from './race-attendant/race-attendant.service';
import { TrainerAggregationService } from './trainer-aggregation/trainer-aggregation.service';

@Injectable()
export class AppService {
  constructor(
    private horseRaceService: HorseRaceService,
    private raceAttendantService: RaceAttendantService,
    private horseAggregationService: HorseAggregationService,
    private jockeyAggregationService: JockeyAggregationService,
    private trainerAggregationService: TrainerAggregationService,
    private aiPredictionService: AIPredictionService,
  ) {}
  async findAll(date: Date) {
    const races = await this.horseRaceService.findAllAtDate(date);
    const race_attendant = [];
    const predicts = [];
    for (const race of races) {
      const ras = await this.raceAttendantService.findAll(race.race_id);
      const race_result = [];
      for (let ra of ras) {
        const convetObject = {};
        convetObject['num'] = ra.line_number;
        const horseAgg = await this.horseAggregationService.findOne(
          ra.horse.horse_number,
        );
        const jockeyAgg = await this.jockeyAggregationService.findOne(
          ra.jockey.id,
        );
        const trainerAgg = await this.trainerAggregationService.findOne(
          ra.trainer.id,
        );
        convetObject['horse'] = horseAgg.serializeHorse();
        convetObject['jockey'] = jockeyAgg.serializeJockey();
        convetObject['trainer'] = trainerAgg.serializeTrainer();
        if (ra.result) convetObject['result'] = ra.result;
        race_result.push(convetObject);
      }
      race_attendant.push(race_result);

      const pred = await this.aiPredictionService.findOne(race.race_id);
      predicts.push([
        {
          no: pred.first_linenumber,
          name: race_result[pred.first_linenumber - 1].horse.name,
        },
        {
          no: pred.second_linenumber,
          name: race_result[pred.second_linenumber - 1]['horse'].name,
        },
        {
          no: pred.third_linenumber,
          name: race_result[pred.third_linenumber - 1].horse.name,
        },
      ]);
    }
    return { races, race_attendant, predicts };
  }
  async findAllResult() {
    const results = {};
    const ras = await this.raceAttendantService.findAll(null, [1, 2, 3]);
    for (const ra of ras) {
      if (ra.result == null) continue;
      if (0 < ra.result && ra.result < 4) {
        if (ra.horseRace == null) continue;
        if (!results[`${ra.horseRace.race_id}`])
          results[`${ra.horseRace.race_id}`] = {
            ord1: {},
            ord2: {},
            ord3: {},
          };
        results[`${ra.horseRace.race_id}`][`ord${ra.result}`]['name'] =
          ra.horse.name;
        results[`${ra.horseRace.race_id}`][`ord${ra.result}`]['num'] =
          ra.horse.horse_number;
      }
    }
    return results;
  }
}
