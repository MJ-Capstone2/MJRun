import {
  RandomForestRegression,
  RandomForestRegression as RFRegression,
} from 'ml-random-forest';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { RaceAttendant } from 'src/race-attendant/entities/race-attendant.entity';
import { RaceAttendantService } from 'src/race-attendant/race-attendant.service';

@Injectable()
export class MJRunModel {
  private modelConfig;
  private rfr: RFRegression;
  private modelConfigPath = './modelConfig.json';
  constructor(
    private raceAttendantService: RaceAttendantService,
    modelConfigPath: string,
  ) {
    try {
      this.modelConfig = JSON.parse(
        fs.readFileSync(modelConfigPath).toString(),
      );
    } catch (e) {
      this.modelConfig = this.createModel();
    }
    this.rfr = RFRegression.load(this.modelConfig);
  }
  private async createModel() {
    const raceAttendants = await this.raceAttendantService.findAll();
    // const dataset = this.preprocess(raceAttendants);
    // return this.__createModel(dataset);
  }

  private __createModel(dataset: number[][]) {
    const trainingSet = new Array(dataset.length);
    const predictions = new Array(dataset.length);
    const resultIndex = dataset[0].length - 1;
    for (let i = 0; i < dataset.length; ++i) {
      trainingSet[i] = dataset[i].slice(0, resultIndex);
      predictions[i] = dataset[i][resultIndex];
    }

    const options = {
      seed: 3,
      maxFeatures: 2,
      replacement: false,
      nEstimators: 200,
    };

    const regression = new RFRegression(options);
    regression.train(trainingSet, predictions);
    const preTrainingModel = regression.toJSON();
    const jsonContent = JSON.stringify(preTrainingModel);

    fs.writeFile('output.json', jsonContent, 'utf8', function (err) {
      if (err) {
        console.log('An error occured while writing JSON Object to File.');
        return console.log(err);
      }

      console.log('JSON file has been saved.');
    });
    return preTrainingModel;
  }
  //   private saveConfig(preTrainingModel: RFRegression): void {
  //     const modelToJSON = preTrainingModel.toJSON();
  //     const jsonContent = JSON.stringify(modelToJSON);
  //     fs.writeFile('output.json', jsonContent, 'utf8', function (err) {
  //       if (err) {
  //         console.log('An error occured while writing JSON Object to File.');
  //         return console.log(err);
  //       }
  //     });
  //   }
  //   public preprocess(raceAttendants: RaceAttendant[]): number[][] {
  //     private const numOfFeature:number = 5 + 14 *
  //     const sample_data = [
  //       {
  //         ra_id: '2016010200101',
  //         line_number: 1,
  //         result: 8,
  //         horseRace: {
  //           race_id: '20160102001',
  //           race_date: 20160102,
  //           race_location: '서울',
  //           race_number: 1,
  //           race_start_time: '10:45:00',
  //           race_distance: 1000,
  //         },
  //         horse: {
  //           horse_number: 33936,
  //           name: '고센',
  //           age: 4,
  //           sex: '거',
  //           nationality: '한국',
  //           rating: 27,
  //           weight: 478,
  //         },
  //         jockey: {
  //           jk_id: 80499,
  //           name: '박현우',
  //           debut: 20120607,
  //           birthdate: 19901201,
  //         },
  //         trainer: {
  //           tr_id: 70115,
  //           name: '박천서',
  //           debut: 20030305,
  //           birthdate: 19630608,
  //         },
  //       },
  //     ];
  //     const tempArray = new Array(numOfFeature);
  //     let
  //     sample_data.forEach((ra_data) => {

  //       const { horseRace, horse, jockey, trainer } = ra_data;
  //       const race_id = horseRace.race_id;
  //       const { race_date, race_location, race_start_time, race_distance } =
  //         horseRace;
  //       const h{ age, sex, nationality, rating } = horse;
  //       const horse_age = age;
  //       const { debut } = jockey;
  //     });
  //     // [[race_date_month, race_date_day, start_date_hour, race_location, race_distance]]
  //     const dummie: number[][] = [[], []];
  //     return dummie;
  //   }
}
