import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RaceAttendant } from 'src/race-attendant/entities/race-attendant.entity';
import { RaceAttendantService } from 'src/race-attendant/race-attendant.service';
import { AIPredictionRepository } from './aiprediction.repository';
import { CreateAIPredictionDto } from './dto/create-aiprediction.dto';
import { UpdateAIPredictionDto } from './dto/update-aiprediction.dto';
import { AIPrediction } from './entities/aiprediction.entity';

@Injectable()
export class AIPredictionService {
  private weekPrecision = {};
  constructor(
    @InjectRepository(AIPredictionRepository)
    private aiPredictionRepository: AIPredictionRepository,
    private raceAttendantService: RaceAttendantService, // private mAIModel:AIModelService,
    private httpService: HttpService,
  ) {}
  create(createAIPredictionDto: CreateAIPredictionDto) {
    return this.aiPredictionRepository.createAIPrediction(
      createAIPredictionDto,
    );
  }

  async pridiction(race_id: number) {
    // const raceAttendants: RaceAttendant[] =
    //   await this.raceAttendantService.findAll(race_id);
    // 전처리
    // const preProcessingData: number[][] = this.model.preprocess(raceAttendants);
    // 전치리된 테스트 데이터
    const test_data = [
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 1, 2010, 761, 43, 2011, 730, 71,
        1000, 0, 7,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2013, 1463, 199, 2011, 1087, 153,
        1000, 0, 3,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 2, 0, 2007, 261, 13, 1986, 667, 50,
        1000, 0, 4,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2017, 436, 30, 2008, 817, 71,
        1000, 0, 2,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2017, 588, 41, 2017, 101, 17,
        1000, 0, 1,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2017, 962, 119, 2017, 238, 38,
        1000, 0, 8,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2012, 463, 19, 2007, 702, 53,
        1000, 0, 12,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2019, 9, 1, 2006, 491, 26, 1000,
        0, 5,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2014, 1370, 138, 2007, 702, 53,
        1000, 0, 9,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2016, 870, 63, 2008, 817, 71,
        1000, 0, 6,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 1, 0, 2017, 469, 35, 1997, 1064, 179,
        1000, 0, 10,
      ],
      [
        2019, 2, 23, 10, 45, 3, 2, 0, 0, 2, 0, 2004, 277, 4, 1997, 496, 33,
        1000, 0, 11,
      ],
    ];
    const req_json = {
      data: test_data,
    };
    // ai모델에 보내기
    return await lastValueFrom(
      this.httpService.post('http://localhost:3002/prediction', req_json).pipe(
        map((res) => {
          return res.data;
        }),
      ),
    );
    // console.log(response_data);
    // 데이터 생성하기
    // await this.create(results);
    // console.log(raceAttendants);
  }
  async findAll(): Promise<AIPrediction[]> {
    return await this.aiPredictionRepository.find({
      relations: ['HorseRace'],
    });
  }

  async findOne(id: number): Promise<AIPrediction> {
    const aiPreidction = await this.aiPredictionRepository.findOne(id);
    if (!aiPreidction) {
      throw new NotFoundException(`Can't find AIPreidciont with id : ${id}`);
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

  async getWeekPre() {
    // if(weekPrecision['ord1'] && weekPrecision['date'] ) return weekPrecision['ord1']
    // 이번 주 데이터 불러오기
    // 계산하기
    // weekPrecision['ord1'] = 할당
    // weekPrecision['date'] = 이번주?
    // 계산값돌려주기
  }
}
