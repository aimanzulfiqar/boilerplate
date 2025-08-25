import { Repository } from 'typeorm';
import { AppDataSource } from '../db/data-source';
import { User } from '../entities/User';

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id } as any);
  }
}