// src/modules/auth/auth.controller.ts
import { FastifyReply, FastifyRequest } from 'fastify';
import { IAuth, IAuthRegister, IToken } from './auth.interface';
import { AuthService } from './auth.service';

export class AuthController {
  constructor(private authService: AuthService) { }

  async login(request: FastifyRequest<{ Body: IAuth }>, reply: FastifyReply): Promise<IToken | null> {
    return await this.authService.login(request.body);
  }

  async register(request: FastifyRequest<{ Body: IAuthRegister }>, reply: FastifyReply): Promise<IToken | null> {
    return await this.authService.register(request.body);
  }
}
