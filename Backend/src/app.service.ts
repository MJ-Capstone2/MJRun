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
      const ra_convert = [];
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
        ra_convert.push(convetObject);
      }
      race_attendant.push(ra_convert);

      const pred = await this.aiPredictionService.findOne(race.race_id);
      predicts.push([
        {
          no: pred.first_linenumber,
          name: ra_convert[pred.first_linenumber - 1].horse.name,
        },
        {
          no: pred.second_linenumber,
          name: ra_convert[pred.second_linenumber - 1]['horse'].name,
        },
        {
          no: pred.third_linenumber,
          name: ra_convert[pred.third_linenumber - 1].horse.name,
        },
      ]);
    }
    return { races, race_attendant, predicts };
  }
}
