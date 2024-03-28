import { UserInterface, UserRepositoryInterface } from '../interfaces/UserInterface';
import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid'

/** Business Logic - Validations (if no middlewares), data manipulations etc.  */

class UserService {

  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  async getAllUsers() : Promise<UserInterface[]> {
    /** Logic if any */
    return await this.userRepository.findAll();
  }

  async createUser(user : UserInterface) : Promise<UserInterface | null> {
    const payload = {
      id : uuidv4(),
      firstName : user.firstName,
      lastName : user.lastName,
      email : user.email,
      password : user.password,
      active : user.active
    }
    return await this.userRepository.create(payload)
  }
  
}

export default UserService;
