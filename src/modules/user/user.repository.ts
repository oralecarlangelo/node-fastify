import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class UserRepository {
  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async createUser(data: any): Promise<User> {
    return await prisma.user.create({ data });
  }
  // Define more repository methods like createUser, getUserById, etc.
}
