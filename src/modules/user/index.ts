// src/modules/user/index.ts
import { FastifyInstance } from 'fastify';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { userRoutes } from './user.routes';

export default async function userModule(fastify: FastifyInstance, opts: any) {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  userRoutes(fastify, userController);
}
