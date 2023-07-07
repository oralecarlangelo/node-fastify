// src/modules/auth/auth.routes.ts
import { FastifyInstance } from 'fastify';
import { AuthController } from './auth.controller';
import { AuthSchema, RegisterSchema } from './auth.schema';

export function authRoutes(server: FastifyInstance, controller: AuthController) {
  server.post('/login', { schema: AuthSchema }, controller.login.bind(controller));
  server.post('/register', { schema: RegisterSchema }, controller.register.bind(controller));
}
