import { FastifyInstance } from 'fastify';
import { UserController } from './user.controller';
import { CreateUserSchema } from './user.schema';
import { MyPluginsFastifyInstance } from '../interfaces/fastify';

export function userRoutes(server: MyPluginsFastifyInstance, controller: UserController) {
  // Protected Route
  server.get('/', {
    onRequest: [server.authenticate],
  }, controller.getAllUsers.bind(controller));
  server.post('/', {
    schema: CreateUserSchema
  }, controller.createUser.bind(controller));
}
