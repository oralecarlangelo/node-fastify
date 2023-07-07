import { CreateUserDto } from "./user.interfaces";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  async createUser(data: CreateUserDto) {
    return this.userRepository.createUser(data)
  }

  // Define more service methods like createUser, getUserById, etc.
}
