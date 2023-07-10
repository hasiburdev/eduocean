import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@eduocean/prisma';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  public getProducts(): Promise<User[]> {
    return prisma.user.findMany();
  }
}
