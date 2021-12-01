import { EntityRepository, Repository } from 'typeorm';
import { CreateRaceAttendantDto } from './dto/create-race-attendant.dto';
import { RaceAttendant } from './entities/race-attendant.entity';

@EntityRepository(RaceAttendant)
export class RaceAttendantRepository extends Repository<RaceAttendant> {
  async createRaceAttendant(
    createRaceAttendantDto: CreateRaceAttendantDto,
  ): Promise<RaceAttendant> {
    const newRaceAttendant = this.create({ ...createRaceAttendantDto });
    await this.save(newRaceAttendant);
    return newRaceAttendant;
  }
}
