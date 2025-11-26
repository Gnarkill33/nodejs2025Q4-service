import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';
import { db } from 'src/db';

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
}
