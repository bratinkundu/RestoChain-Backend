/** Implementation of actual database operations for User Model */
/** Consider this as Data Access Layer */

import { User } from "../models/User";
import {
  UserInterface,
  UserRepositoryInterface,
} from "../interfaces/UserInterface";
import { Repository } from "typeorm";
import { Database } from "../configs/Database";

class UserRepository implements UserRepositoryInterface {

  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = Database.getInstance().getRepository(User);
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userRepository.find();
  }

  async create(user: User): Promise<UserInterface | null> {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      console.error("Error creating user:", error);
      return null;
    }
  }

  async update(id: string, user: UserInterface): Promise<UserInterface | null> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default UserRepository;
