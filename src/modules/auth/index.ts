// src/modules/auth/auth.module.ts
import { FastifyInstance } from 'fastify';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { authRoutes } from './auth.routes';

export default async function authModule(fastify: FastifyInstance, opts: any) {
  const authRepository = new AuthRepository();
  const authService = new AuthService(authRepository);
  const authController = new AuthController(authService);

  authRoutes(fastify, authController);
}
