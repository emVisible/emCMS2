import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { QueryTeacherByNameDto } from './dto/query-teacher.dto';
import { DeleteTeacherByTidDto } from './dto/del-tid.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeacherService {
  constructor(private client: PrismaService) { }
  async create(createTeacherDto: CreateTeacherDto) {
    await this.client.teacher.create({
      data: createTeacherDto
    })
    return "创建成功"
  }

  async findAll() {
    return await this.client.teacher.findMany({
      where: {}
    })
  }

  async findById(t_id: string) {
    return await this.client.teacher.findFirst({
      where: {
        t_id
      }
    })
  }

  async findByName(queryDto: QueryTeacherByNameDto) {
    const { name } = queryDto
    return await this.client.teacher.findFirst({
      where: {
        name
      }
    })
  }

  async update(updateTeacherDto: UpdateTeacherDto) {
    const { t_id } = updateTeacherDto
    const teacher = await this.findById(t_id)
    await this.client.teacher.update({
      where: {
        id: teacher.id
      },
      data: updateTeacherDto
    })
    return "教师信息更新成功"
  }

  async remove(removeDto: DeleteTeacherByTidDto) {
    const { t_id } = removeDto
    await this.client.teacher.delete({
      where: {
        t_id
      }
    })
    return "教师信息删除成功"
  }
}
