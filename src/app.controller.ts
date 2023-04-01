import { Body, Controller, Get, Post } from "@nestjs/common";
import { UptoMemberRepository } from './repositories/upto-members-repository';
import { UptoMembersBody } from './dtos/create-member-upto-body';

@Controller()
export class AppController {
  constructor(private uptoMembersRepository: UptoMemberRepository) { }

  @Post('create')
  async getHello(@Body() body: UptoMembersBody) {
    const { name, 'function': memberFunction } = body

    await this.uptoMembersRepository.create(name, memberFunction)

    return {
      message: 'Membro adicionado com sucesso!'
    }
  }

  @Get('list')
  async getList() {
    const members = await this.uptoMembersRepository.list()

    return members
  }
}
