import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';
import { db, uuid } from 'src/db';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  findAllUsers() {
    return db.users;
  }

  findUserById(id: string) {
    const user = db.users.find((user) => user.id === id);

    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid user ID');
    }

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  createUser(dto: CreateUserDto) {
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

  updateUser(id: string, dto: UpdateUserDto) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid user ID');
    }

    const existingUser = this.findUserById(id);

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (existingUser.password !== dto.oldPassword) {
      throw new ForbiddenException('Wrong password');
    }

    const updatedUser = {
      ...existingUser,
      password: dto.newPassword,
      version: existingUser.version + 1,
    };

    db.users = db.users.map((user) => (user.id === id ? updatedUser : user));

    return updatedUser;
  }
}
