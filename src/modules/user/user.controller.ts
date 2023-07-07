import { FastifyReply, FastifyRequest } from 'fastify';
import { UserService } from './user.service';
import { CreateUserDto, IUser } from './user.interfaces';

export class UserController {
  constructor(private userService: UserService) {}

  async getAllUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await this.userService.getAllUsers();
    reply.send(users);
  }

  async createUser(request: FastifyRequest<{ Body: CreateUserDto }>, reply: FastifyReply): Promise<IUser> {
    return await this.userService.createUser(request.body);
  }

  // Define more controller methods like createUser, getUserById, etc.
}
