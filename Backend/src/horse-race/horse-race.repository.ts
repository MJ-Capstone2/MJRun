import { EntityRepository, Repository } from 'typeorm';
import { CreateHorseRaceDto } from './dto/create-horse-race.dto';
import { HorseRace } from './entities/horse-race.entity';

@EntityRepository(HorseRace)
export class HorseRaceRepository extends Repository<HorseRace> {
  async createHorseRace(
    createHorseRaceDto: CreateHorseRaceDto,
  ): Promise<HorseRace> {
    const newHorseRace = this.create({ ...createHorseRaceDto });
    await this.save(newHorseRace);
    return newHorseRace;
  }
}
