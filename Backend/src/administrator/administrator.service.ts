import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { Administrator } from './entities/administrator.entity';
import { AdministratorRepository } from './administrator.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(AdministratorRepository)
    private administratorRepository: AdministratorRepository,
  ) {}

  async getAllAdministrator(): Promise<Administrator[]> {
    const administrators = await this.administratorRepository.find();
    return administrators;
  }

  async getAdministratorById(id: string): Promise<Administrator> {
    const administrator = await this.administratorRepository.findOne(id);
    if (!administrator) {
      throw new NotFoundException(`Can't find Administrator with id : ${id}`);
    }
    return administrator;
  }

  createAdministrator(
    createAdministratorDto: CreateAdministratorDto,
  ): Promise<Administrator> {
    return this.administratorRepository.createAdministrator(
      createAdministratorDto,
    );
  }

  async deleteAdministrator(id: string): Promise<void> {
    const result = await this.administratorRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find Administrator with id : ${id}`);
    }

    console.log(result);
  }

  async updateAdministratorEmail(
    id: string,
    email: string,
  ): Promise<Administrator> {
    const administrator = await this.getAdministratorById(id);

    administrator.email = email;
    await this.administratorRepository.save(Administrator);

    return administrator;
  }

  async updateAdministratorPassword(
    id: string,
    pw: string,
  ): Promise<Administrator> {
    const administrator = await this.getAdministratorById(id);

    administrator.password = pw;
    await this.administratorRepository.save(Administrator);

    return administrator;
  }

  async logIn(id: string, password: string): Promise<boolean> {
    const hashPassword = (
      await this.getAdministratorById(id)
    ).password.toString();
    return await bcrypt.compare(password, hashPassword);
  }
}
