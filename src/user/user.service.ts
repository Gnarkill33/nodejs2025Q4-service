import { Injectable } from '@nestjs/common';
import { db } from 'src/db';

@Injectable()
export class UserService {
  findAllUsers() {
    return db.users;
  }

  findById(id: string) {
    const user = db.users.find((user) => user.id === id);
    return user;
  }
}
