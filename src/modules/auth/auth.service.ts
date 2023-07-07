// src/modules/auth/auth.service.ts
import { IAuth, IAuthRegister, IToken } from './auth.interface';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthRepository } from './auth.repository';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export class AuthService {
  constructor(private authRepository: AuthRepository) { }

  async login(data: IAuth): Promise<IToken | null> {
    const user = await this.authRepository.findUser(data.email);

    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = await this.authRepository.comparePassword(data.password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid password');
    }

    // We are assuming you have a method generateJWT that generates a JWT token
    const token = await this.generateJWT(user);

    return { token };
  }

  async register(data: IAuthRegister): Promise<IToken | null> {
    try {
      const { password, ...rest } = data
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const user = await this.authRepository.registerUser({ ...rest, password: hashedPassword })
      return { token: await this.generateJWT(user) }
    } catch (e) {
      console.log("ERROR", e)
      throw (e)
    }

  }

  async generateJWT(user: any): Promise<string> {
    // Generate JWT token, implementation depends on the JWT library used
    return jwt.sign({ id: user.id }, JWT_SECRET || 'your_default_secret_key');
  }
}
