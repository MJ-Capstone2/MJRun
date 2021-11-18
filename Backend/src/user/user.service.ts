import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getAllUser(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`Can't find User with id : ${id}`);
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  async deleteUser(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected == 0) {
      throw new NotFoundException(`Can't find User with id : ${id}`);
    }

    console.log(result);
  }

  async updateUserEmail(id: string, email: string): Promise<User> {
    const user = await this.getUserById(id);

    user.email = email;
    await this.userRepository.save(user);

    return user;
  }
}
