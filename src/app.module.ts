import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { PrismaService } from "./prisma/prisma.service";
import { UptoMemberRepository } from "./repositories/upto-members-repository";
import { PrismaUptoMembersRepository } from "./repositories/prisma/prisma-upto-members-repository";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: UptoMemberRepository,
      useClass: PrismaUptoMembersRepository
    }
  ],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
