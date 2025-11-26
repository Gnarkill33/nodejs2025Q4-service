import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';
import { db, uuid } from 'src/db';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  findAllUsers() {
    return db.users;
  }

  findById(id: string) {
    const user = db.users.find((user) => user.id === id);

    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid user ID');
    }

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  create(dto: CreateUserDto) {
    if (!dto.login || !dto.password) {
      throw new BadRequestException('Required fields are missing');
    }

    const newUser = {
      id: uuid(),
      login: dto.login,
      password: dto.password,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    db.users.push(newUser);

    return newUser;
  }
}
