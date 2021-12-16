import { Injectable } from '@nestjs/common';
import { createReadStream, readdirSync, readFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { AIPredictionService } from './aiprediction/aiprediction.service';
import { HorseAggregationService } from './horse-aggregation/horse-aggregation.service';
import { HorseRaceService } from './horse-race/horse-race.service';
import { CreateHorseDto } from './horse/dto/create-horse.dto';
import { Horse } from './horse/entities/horse.entity';
import { HorseService } from './horse/horse.service';
import { CreateJockeyAggregationDto } from './jockey-aggregation/dto/create-jockey-aggregation.dto';
import { JockeyAggregationService } from './jockey-aggregation/jockey-aggregation.service';
import { JockeyService } from './jockey/jockey.service';
import { RaceAttendantService } from './race-attendant/race-attendant.service';
import { TrainerAggregationService } from './trainer-aggregation/trainer-aggregation.service';
import { TrainerService } from './trainer/trainer.service';

@Injectable()
export class AppService {
  constructor(
    private horseService: HorseService,
    private jockeyService: JockeyService,
    private trainerService: TrainerService,
    private horseRaceService: HorseRaceService,
    private raceAttendantService: RaceAttendantService,
    private horseAggregationService: HorseAggregationService,
    private jockeyAggregationService: JockeyAggregationService,
    private trainerAggregationService: TrainerAggregationService,
    private aiPredictionService: AIPredictionService,
  ) {}
  async findAll(date: Date) {
    // console.log('find all at date = ', date);
    const races = await this.horseRaceService.findAllAtDate(date);

    const horseAgg = await this.horseAggregationService.findAll();
    const horseAggObj = {};
    for (let ha of horseAgg) {
      horseAggObj[ha.horse.horse_number] = ha.serializeHorse();
    }
    const jockeyAgg = await this.jockeyAggregationService.findAll();
    const jockeyAggObj = {};
    for (let ja of jockeyAgg) {
      jockeyAggObj[ja.jockey.id] = ja.serializeJockey();
    }
    const trainerAgg = await this.trainerAggregationService.findAll();
    const trainerAggObj = {};
    for (let ta of trainerAgg) {
      trainerAggObj[ta.trainer.id] = ta.serializeTrainer();
    }
    const race_attendant = [];
    const predicts = [];
    const results = [];
    for (const race of races) {
      const ras = await this.raceAttendantService.findAll(race.race_id);
      const race_result = [];
      const result = [{}, {}, {}];
      let hasResult = false;
      for (let ra of ras) {
        const convetObject = {};
        convetObject['num'] = ra.line_number;
        convetObject['horse'] = horseAggObj[ra.horse.horse_number];
        convetObject['jockey'] = jockeyAggObj[ra.jockey.id];
        convetObject['trainer'] = trainerAggObj[ra.trainer.id];
        if (ra.result) {
          convetObject['result'] = ra.result;
          if (0 < ra.result && ra.result < 4) {
            hasResult = true;
            result[ra.result - 1]['line_number'] = ra.line_number;
            result[ra.result - 1]['name'] = ra.horse.name;
          }
        }
        race_result.push(convetObject);
      }
      results.push(hasResult ? result : null);
      race_attendant.push(race_result);

      const pred = await this.aiPredictionService.findOne(race.race_id);
      if (pred) {
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
    }
    return { races, race_attendant, predicts, results };
  }

  async findAllResult() {
    const results = [];
    const ras = await this.raceAttendantService.findAll(null, [1, 2, 3]);
    ras.sort((ra) => ra.horseRace.race_id);
    let prev_race_id = 0;
    let result = {};
    for (const ra of ras) {
      if (ra.result == null) continue;
      if (ra.horseRace == null) continue;
      if (0 < ra.result && ra.result < 4) {
        if (prev_race_id != ra.horseRace.race_id) {
          results.push(result);
          result = {};
          prev_race_id = ra.horseRace.race_id;
          result['id'] = ra.horseRace.race_id;
        }
        result[`ord${ra.result}_name`] = ra.horse.name;
        result[`ord${ra.result}_num`] = ra.horse.horse_number;
      }
    }
    results.push(result);
    return results.slice(1);
  }

  async uploads(files: File[]) {
    const path = join(__dirname, '../tempUpload');
    const file_list = readdirSync(path);
    for (let file of file_list) {
      let file_name = file.split('.')[0];
      let data = readFileSync(join(path, file), 'utf8');
      let rows = data.split('\r\n');

      let header = rows[0].split(',');
      let values = rows.splice(1).map((row) => row.split(','));
      values.pop();
      let objs = values.map((vs) =>
        Object.fromEntries(vs.map((v, i) => [header[i], v])),
      );
      if (file_name == 'fakehorse') await this.horseService.multiCreate(objs);
      if (file_name == 'fakejockey') await this.jockeyService.multiCreate(objs);
      if (file_name == 'faketrainer')
        await this.trainerService.multiCreate(objs);
      if (file_name == 'horseRace')
        await this.horseRaceService.multiCreate(objs);
      if (file_name == 'raceAttendant') {
        await this.raceAttendantService.multiCreate(objs);
        await this.aiPredictionService.multiCreate(objs);
      }
      if (file_name.slice(0, 10) == 'raceResult')
        this.raceAttendantService.addResult(objs);
      unlinkSync(join(path, file));
    }

    return file_list.length;
  }
}
