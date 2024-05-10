import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryClassesDto } from './dto/query-classes.dto';
import { CreateClassesDto } from './dto/create-classes.dto';
import { UpdateClassesDto } from './dto/update-classes.dto';
import { DeleteClassesDto } from './dto/delete-classes.dto';

@Injectable()
export class ClassesService {
  constructor(private client: PrismaService) { }

  async create(dto: CreateClassesDto) {
    await this.client.classes.create({
      data: dto
    })
    return "创建班级成功"
  }

  async getAll() {
    return this.client.classes.findMany({
      where: {}
    })
  }

  async findById(cl_id: string) {
    return await this.client.classes.findFirst({
      where: { cl_id }
    })
  }

  async findByName(dto: QueryClassesDto) {
    const { name } = dto
    return await this.client.classes.findFirst({
      where: {
        name
      }
    })
  }

  async update(dto: UpdateClassesDto) {
    const { cl_id } = dto
    const aim = await this.findById(cl_id)

    await this.client.classes.update({
      where: { id: aim.id },
      data: dto
    })
    return "更新班级成功"
  }

  async delete(dto: DeleteClassesDto) {
    const { cl_id } = dto
    const aim = await this.findById(cl_id)
    await this.client.classes.delete({
      where: { id: aim.id }
    })
    return "删除班级成功"
  }
}
