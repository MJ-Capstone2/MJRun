import { Injectable } from '@nestjs/common';
const prisma = {};

@Injectable()
export class UserService {
  const getAllUsers = function():Object {
    const allUsers:object = await prisma.user.findmany();
    return allUsers;
  }
}
