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
  constructor(
    @InjectRepository(AIPredictionRepository)
    private aiPredictionRepository: AIPredictionRepository,
    private raceAttendantService: RaceAttendantService, // private mAIModel:AIModelService,
  ) {}
  create(createAIPredictionDto: CreateAIPredictionDto) {
    return this.aiPredictionRepository.createAIPrediction(
      createAIPredictionDto,
    );
  }

  async pridiction(race_id: number) {
    const raceAttendants: RaceAttendant[] =
      await this.raceAttendantService.findAll(race_id);
    // 전처리
    // const preProcessingData: number[][] = this.model.preprocess(raceAttendants);
    // ai모델에 보내기
    // const results:createAIPredictionDto = this.model.predict(preProcessingData);
    // 데이터 생성하기
    // await this.create(results);
    console.log(raceAttendants);
  }
  /*
  [
    RaceAttendant {
      ra_id: '2016010200101',
      line_number: 1,
      result: 8,
      horseRace: HorseRace {
        race_id: '20160102001',
        race_date: 20160102,
        race_location: '서울',
        race_number: 1,
        race_start_time: '10:45:00',
        race_distance: 1000
      },
      horse: Horse {
        horse_number: 33936,
        name: '고센',
        age: 4,
        sex: '거',
        nationality: '한국',
        rating: 27,
        weight: 478
      },
      jockey: Jockey {
        jk_id: 80499,
        name: '박현우',
        debut: 20120607,
        birthdate: 19901201
      },
      trainer: Trainer {
        tr_id: 70115,
        name: '박천서',
        debut: 20030305,
        birthdate: 19630608
      }
    },
  ]
   */
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
}
