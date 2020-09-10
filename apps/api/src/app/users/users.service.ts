import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // get(id: string): User {
  //   return emptyUser;
  // }
  // create(user: User): User {
  //   return emptyUser;
  // }
  // update(user: User): User {
  //   return emptyUser;
  // }
  // delete(id: string): User {
  //   return emptyUser;
  // }
}
