import { EntityRepository, Repository } from 'typeorm';
import { Administrator } from './entities/administrator.entity';
import { HashedAdministratorDto } from './dto/hash-administrator.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Administrator)
export class AdministratorRepository extends Repository<Administrator> {
  async createAdministrator(
    hashedAdministratorDto: HashedAdministratorDto,
  ): Promise<Administrator> {
    const newAdministrator = this.create({ ...hashedAdministratorDto });
    try {
      await this.save(newAdministrator);
    } catch (e) {
      if (e.code == '23505')
        throw new ConflictException('Existing Admin ID or e-mail address');
      else throw new InternalServerErrorException();
    }
    return newAdministrator;
  }
}
