import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { user_id, password, email, nickname } = createUserDto;

    const newUser = this.create({
      user_id,
      password,
      email,
      nickname,
    });
    await this.save(newUser);
    return newUser;
  }
}
