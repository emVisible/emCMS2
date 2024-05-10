import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private client: PrismaService) { }

  async create(createStudentDto: CreateStudentDto) {
    const { s_id } = createStudentDto
    const signal = await this.alreadyExist(s_id)
    if (signal) {
      return '用户已存在'
    } else {
      await this.client.student.create({
        data: createStudentDto
      })
      return "创建成功"
    }
  }

  async findByName(name: string) {
    return this.client.student.findMany({
      where: {
        name
      }
    })
  }

  async findAll() {
    return await this.client.student.findMany({
      where: {}
    })
  }

  async findOne(s_id: string) {
    return await this.client.student.findFirst({
      where: {
        s_id: s_id
      }
    })
  }

  async update(updateStudentDto: UpdateStudentDto) {
    const { s_id } = updateStudentDto
    const signal = await this.alreadyExist(s_id)
    if (!signal) return '学生不存在, 无法更新'
    await this.client.student.update({
      where: {
        id: signal.id,
        s_id
      },
      data: updateStudentDto
    })
    return "更新成功"
  }

  async remove(s_id: string) {
    const signal = await this.alreadyExist(s_id)
    if (!signal) return '学生不存在, 无法删除'
    await this.client.student.delete({
      where: {
        id: signal.id,
        s_id
      }
    })
    return "删除成功"
  }

  async alreadyExist(s_id: string) {
    return await this.findOne(s_id)
  }
}
