import { randomUUID } from "node:crypto";

import { PrismaService } from "src/prisma/prisma.service";
import { UptoMemberRepository } from "../upto-members-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUptoMembersRepository implements UptoMemberRepository {
  constructor(private prisma: PrismaService) { }

  async create(name: string, memberfunction: string): Promise<void> {
    await this.prisma.upToMembers.create({
      data: {
        id: randomUUID(),
        name,
        function: memberfunction
      }
    })
  }

  async list(): Promise<object> {
    const members = await this.prisma.upToMembers.findMany();

    return members
  }
}