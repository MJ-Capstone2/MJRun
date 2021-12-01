import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { Administrator } from './entities/administrator.entity';
import { AdministratorRepository } from './administrator.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(AdministratorRepository)
    private administratorRepository: AdministratorRepository,
    private jwtService: JwtService,
  ) {}

  async getAllAdministrator(): Promise<Administrator[]> {
    return await this.administratorRepository.find();
  }

  async getAdministratorById(id: string): Promise<Administrator> {
    const administrator = await this.administratorRepository.findOne(id);
    if (!administrator) {
      throw new NotFoundException(`Can't find Administrator with id : ${id}`);
    }
    return administrator;
  }

  async createAdministrator(
    createAdministratorDto: CreateAdministratorDto,
  ): Promise<Administrator> {
    const { id, password, email } = createAdministratorDto;
    const salt = await bcrypt.genSalt();
    const hasedPassword = await bcrypt.hash(password, salt);
    return this.administratorRepository.createAdministrator({
      id,
      password: hasedPassword,
      email,
    });
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

  async signIn(id: string, password: string): Promise<{ accessToken: string }> {
    const hashPassword = (
      await this.getAdministratorById(id)
    ).password.toString();
    const isCorrect = await bcrypt.compare(password, hashPassword);
    if (isCorrect) {
      // 유저 토큰 생성
      const payload = { id };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('SignIn Failed');
    }
  }
}
