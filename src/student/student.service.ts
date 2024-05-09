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
      this.client.student.create({
        data: createStudentDto
      })
    }
  }

  findAll() {
    return this.client.student.findMany({
      where: {}
    })
  }

  findOne(s_id: string) {
    return this.client.student.findFirst({
      where: {
        s_id: s_id
      }
    })
  }

  async update(s_id: string, updateStudentDto: UpdateStudentDto) {
    const signal = await this.alreadyExist(s_id)
    if (!signal) return '学生不存在, 无法更新'
    this.client.student.update({
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
    this.client.student.delete({
      where: {
        id: signal.id,
        s_id
      }
    })
    return "删除成功"
  }

  async alreadyExist(s_id: string) {
    return this.findOne(s_id)
  }
}
