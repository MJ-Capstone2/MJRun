import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RaceAttendantRepository } from 'src/race-attendant/race-attendant.repository';

@Injectable()
export class AimodelService {
  constructor(
    @InjectRepository(RaceAttendantRepository)
    private raceAttendantRepository: RaceAttendantRepository,
  ) {}
}
