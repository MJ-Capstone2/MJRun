import { EntityRepository, Repository } from 'typeorm';
import { Administrator } from './entities/administrator.entity';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(Administrator)
export class AdministratorRepository extends Repository<Administrator> {
  async createAdministrator(
    createAdministratorDto: CreateAdministratorDto,
  ): Promise<Administrator> {
    const { id, password, email } = createAdministratorDto;
    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltOrRounds);

    const newAdministrator = this.create({
      id,
      password: hashPassword,
      email,
    });
    await this.save(newAdministrator);
    return newAdministrator;
  }
}
