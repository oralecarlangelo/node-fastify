// src/modules/auth/auth.repository.ts
import { PrismaClient, User } from '@prisma/client';
import { IAuth, IAuthRegister } from './auth.interface';
import bcrypt from 'bcrypt';
import { prisma } from '../../../prisma/client';

export class AuthRepository {


  async findUser(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async registerUser(data: IAuthRegister) {
    return await prisma.user.create({ data });
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
